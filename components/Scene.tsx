"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertex = /* glsl */ `
uniform float uTime, uMorph, uIntro, uPixel, uSize, uScale, uPulse;
uniform vec2 uMouse, uOffset, uPulseOrigin;
attribute vec3 aB, aC, aD;
attribute vec4 aRand;
varying vec3 vCol;
varying float vA;

mat2 rot(float a){ float s = sin(a), c = cos(a); return mat2(c, -s, s, c); }

void main(){
  float m = clamp(uMorph, 0., 3.);
  float w0 = smoothstep(0., 1., max(0., 1. - abs(m - 0.)));
  float w1 = smoothstep(0., 1., max(0., 1. - abs(m - 1.)));
  float w2 = smoothstep(0., 1., max(0., 1. - abs(m - 2.)));
  float w3 = smoothstep(0., 1., max(0., 1. - abs(m - 3.)));
  vec3 pos = position * w0 + aB * w1 + aC * w2 + aD * w3;

  pos += vec3(
    sin(pos.y * 2.1 + uTime * .6 + aRand.x * 6.28),
    sin(pos.z * 2.3 + uTime * .5 + aRand.y * 6.28),
    sin(pos.x * 1.9 + uTime * .7 + aRand.z * 6.28)) * .06;

  // intro: particles fly in from a scattered cloud, staggered per particle
  float k = clamp(uIntro * 1.5 - aRand.w * .5, 0., 1.);
  k = 1. - pow(1. - k, 3.);
  pos = mix((aRand.xyz - .5) * 16., pos, k);

  pos.xz *= rot(uTime * .08 + uMorph * .7);
  pos.yz *= rot(.28 * sin(uTime * .12));
  pos *= uScale;
  pos.xy += uOffset;

  // cursor repulsion
  vec2 d = pos.xy - uMouse;
  float dist = length(d);
  float f = 1. - smoothstep(0., 1.7, dist);
  pos.xy += normalize(d + 1e-4) * f * .6;
  pos.z += f * (aRand.x - .5) * 2.4;

  // click shockwave
  vec2 pd = pos.xy - uPulseOrigin;
  float r = length(pd);
  float ring = exp(-pow((r - uPulse * 7.) * 1.3, 2.)) * exp(-uPulse * 1.1);
  pos.xy += normalize(pd + 1e-4) * ring * .7;
  pos.z += ring * 1.4;

  vec4 mv = modelViewMatrix * vec4(pos, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = (3.2 + aRand.w * 3.2 + f * 4. + ring * 6.) * uPixel * (6.5 / -mv.z) * uSize;

  vec3 base = mix(vec3(.78, 1., .24), vec3(.3, .68, 1.), aRand.y);
  vCol = base + f * .55 + ring * .8;
  vA = (.45 + .55 * aRand.z) * clamp(1.45 - (-mv.z - 4.) / 6., .25, 1.);
}
`;

const fragment = /* glsl */ `
uniform float uAlpha;
varying vec3 vCol;
varying float vA;
void main(){
  float d = length(gl_PointCoord - .5);
  if (d > .5) discard;
  float a = 1. - smoothstep(0., .5, d);
  gl_FragColor = vec4(vCol, a * (.35 + .65 * a) * vA * uAlpha);
}
`;

// per-shape scene layout (desktop): horizontal offset + opacity so text stays readable
const OFFSET_X = [2.5, 3.1, 3.1, 2.6];
const ALPHA = [1, 0.3, 0.26, 0.38];

function buildGeometry(side: number) {
  const n = side ** 3;
  const A = new Float32Array(n * 3);
  const B = new Float32Array(n * 3);
  const C = new Float32Array(n * 3);
  const D = new Float32Array(n * 3);
  const R = new Float32Array(n * 4);
  const rnd = Math.random;
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < n; i++) {
    const i3 = i * 3;

    // 0 — sphere shell (fibonacci lattice)
    const y = 1 - (i / (n - 1)) * 2;
    const rr = Math.sqrt(1 - y * y);
    const th = golden * i;
    const rad = 2 * (0.86 + 0.14 * rnd());
    A[i3] = Math.cos(th) * rr * rad;
    A[i3 + 1] = y * rad;
    A[i3 + 2] = Math.sin(th) * rr * rad;

    // 1 — (2,3) torus knot tube
    const t = rnd() * Math.PI * 2;
    const q = 3;
    const p = 2;
    const kr = 1.55 + 0.55 * Math.cos(q * t);
    const cx = kr * Math.cos(p * t);
    const cy = kr * Math.sin(p * t);
    const cz = 0.9 * Math.sin(q * t);
    const a2 = rnd() * Math.PI * 2;
    const tr = 0.22 * Math.sqrt(rnd());
    B[i3] = cx + Math.cos(a2) * tr;
    B[i3 + 1] = cy + Math.sin(a2) * tr;
    B[i3 + 2] = cz + (rnd() - 0.5) * tr * 2;

    // 2 — crystal lattice cube
    const ix = i % side;
    const iy = Math.floor(i / side) % side;
    const iz = Math.floor(i / (side * side));
    const s = 4.2 / (side - 1);
    C[i3] = ix * s - 2.1;
    C[i3 + 1] = iy * s - 2.1;
    C[i3 + 2] = iz * s - 2.1;

    // 3 — spiral galaxy
    const gr = Math.pow(rnd(), 0.62) * 3.6;
    const arm = Math.floor(rnd() * 3) * ((Math.PI * 2) / 3);
    const ang = gr * 1.55 + arm + (rnd() - 0.5) * 0.5;
    D[i3] = Math.cos(ang) * gr;
    D[i3 + 1] = (rnd() - 0.5) * 0.35 * (1 - gr / 4.5);
    D[i3 + 2] = Math.sin(ang) * gr;

    R[i * 4] = rnd();
    R[i * 4 + 1] = rnd();
    R[i * 4 + 2] = rnd();
    R[i * 4 + 3] = rnd();
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(A, 3));
  g.setAttribute("aB", new THREE.BufferAttribute(B, 3));
  g.setAttribute("aC", new THREE.BufferAttribute(C, 3));
  g.setAttribute("aD", new THREE.BufferAttribute(D, 3));
  g.setAttribute("aRand", new THREE.BufferAttribute(R, 4));
  // positions are animated in the shader, so skip CPU frustum culling
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 50);
  return g;
}

function Particles({ side, mobile, reduced }: { side: number; mobile: boolean; reduced: boolean }) {
  const geometry = useMemo(() => buildGeometry(side), [side]);
  const state = useRef({ morph: 0, intro: reduced ? 1 : 0, offX: OFFSET_X[0], alpha: 1, pulse: 99, time: 0 });
  const { gl } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uIntro: { value: 0 },
      uPixel: { value: 1 },
      uSize: { value: 1 },
      uScale: { value: 1 },
      uAlpha: { value: 1 },
      uPulse: { value: 99 },
      uMouse: { value: new THREE.Vector2(99, 99) },
      uOffset: { value: new THREE.Vector2() },
      uPulseOrigin: { value: new THREE.Vector2() },
    }),
    [],
  );

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [uniforms],
  );
  const mouse = useRef({ x: 9, y: 9 });
  useEffect(() => {
    const move = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const down = () => {
      state.current.pulse = 0;
      uniforms.uPulseOrigin.value.copy(uniforms.uMouse.value);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
    };
  }, [uniforms]);

  useFrame((fs, dt) => {
    const s = state.current;
    const u = uniforms;
    dt = Math.min(dt, 0.05);
    if (!reduced) s.time += dt;
    s.intro = Math.min(1, s.intro + dt / 2.6);
    s.pulse += dt;

    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const target = THREE.MathUtils.clamp(window.scrollY / max, 0, 1) * 3;
    const damp = 1 - Math.exp(-dt * 3.2);
    s.morph += (target - s.morph) * damp;

    // interpolate layout values between shapes
    const lo = Math.min(3, Math.floor(s.morph));
    const hi = Math.min(3, lo + 1);
    const f = s.morph - lo;
    const offX = mobile ? 0 : OFFSET_X[lo] * (1 - f) + OFFSET_X[hi] * f;
    const alpha = (ALPHA[lo] * (1 - f) + ALPHA[hi] * f) * (mobile ? 0.42 : 1);

    const v = fs.viewport;
    const targetMouseX = mouse.current.x * (v.width / 2);
    const targetMouseY = mouse.current.y * (v.height / 2);
    u.uMouse.value.x += (targetMouseX - u.uMouse.value.x) * (1 - Math.exp(-dt * 12));
    u.uMouse.value.y += (targetMouseY - u.uMouse.value.y) * (1 - Math.exp(-dt * 12));

    u.uTime.value = s.time;
    u.uMorph.value = s.morph;
    u.uIntro.value = s.intro;
    u.uPulse.value = s.pulse;
    u.uPixel.value = gl.getPixelRatio();
    u.uScale.value = mobile ? 0.6 : 0.86;
    u.uSize.value = mobile ? 0.9 : 1;
    u.uAlpha.value = alpha;
    // scroll parallax on y + smooth horizontal travel between sections
    u.uOffset.value.set(offX, Math.sin(s.morph * Math.PI) * 0.25);
  });

  return (
    <points geometry={geometry} material={material} frustumCulled={false} />
  );
}

export default function Scene() {
  const mobile = typeof window !== "undefined" && window.innerWidth < 768;
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const side = mobile ? 20 : 28;

  return (
    <Canvas
      className="!fixed inset-0 z-0"
      dpr={[1, mobile ? 1.5 : 1.75]}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Particles side={side} mobile={mobile} reduced={reduced} />
    </Canvas>
  );
}
