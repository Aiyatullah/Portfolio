"use client";

import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { sideProjects } from "@/lib/data";
import { Reveal, Section, Spot, Tag } from "./ui";

const N = {
  agent: { x: 80, y: 150, label: "AI agent", sub: "REST / MCP caller" },
  gate: { x: 300, y: 150, label: "Policy gateway", sub: "JWT · scope RBAC" },
  tool: { x: 800, y: 150, label: "Tools", sub: "REST · MCP" },
  approval: { x: 550, y: 262, label: "Approval queue", sub: "human in the loop" },
  audit: { x: 550, y: 38, label: "Audit trace", sub: "attributable log" },
};
type K = keyof typeof N;
type Phase = "idle" | "running" | "waiting" | "done";
type Line = { t: string; tone: "info" | "ok" | "warn" | "bad" };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function AgentGate() {
  const px = useMotionValue(N.agent.x);
  const py = useMotionValue(N.agent.y);
  const [phase, setPhase] = useState<Phase>("idle");
  const [color, setColor] = useState("#c8ff3d");
  const [log, setLog] = useState<Line[]>([{ t: "ready — send a request through the gateway", tone: "info" }]);
  const [flash, setFlash] = useState<K | null>(null);
  const decide = useRef<((ok: boolean) => void) | null>(null);
  const alive = useRef(true);
  useEffect(() => () => void (alive.current = false), []);

  const say = (t: string, tone: Line["tone"] = "info") => alive.current && setLog((l) => [...l.slice(-7), { t, tone }]);
  const go = (k: K, d = 0.9) =>
    Promise.all([animate(px, N[k].x, { duration: d, ease: [0.65, 0, 0.35, 1] }), animate(py, N[k].y, { duration: d, ease: [0.65, 0, 0.35, 1] })]);
  const pulse = async (k: K) => {
    setFlash(k);
    await sleep(500);
    setFlash(null);
  };

  async function run(risk: "low" | "high") {
    if (phase === "running" || phase === "waiting") return;
    const tool = risk === "low" ? "GET /orders/4821" : "POST /payments/refund";
    px.set(N.agent.x);
    py.set(N.agent.y);
    setColor(risk === "low" ? "#c8ff3d" : "#ffb347");
    setLog([]);
    setPhase("running");
    say(`agent-07 → ${tool}`);
    await go("gate");
    say("JWT verified · tenant=acme · scope check…", "info");
    await sleep(500);
    if (risk === "low") {
      say("policy: ALLOW (scope tools:read, low risk)", "ok");
      await go("tool");
      say("200 OK — response returned to agent", "ok");
    } else {
      say("policy: HOLD — high-risk action, human approval required", "warn");
      await go("approval");
      setPhase("waiting");
      say("waiting for human decision…", "warn");
      const ok = await new Promise<boolean>((r) => (decide.current = r));
      if (!alive.current) return;
      setPhase("running");
      if (ok) {
        say("approved by j.keller@acme", "ok");
        setColor("#c8ff3d");
        await go("tool");
        say("200 OK — refund executed", "ok");
      } else {
        say("denied by j.keller@acme — action blocked", "bad");
        setColor("#ff5d5d");
        await go("gate", 0.7);
        say("403 returned to agent", "bad");
      }
    }
    pulse("audit");
    say(`audit: trace tr_${Math.random().toString(36).slice(2, 8)} recorded (tenant-isolated via RLS)`, "info");
    await sleep(600);
    if (alive.current) setPhase("done");
  }

  const node = (k: K) => {
    const n = N[k];
    const hot = flash === k || (k === "approval" && phase === "waiting");
    return (
      <g key={k} transform={`translate(${n.x} ${n.y})`}>
        <rect
          x={-62}
          y={-26}
          width={124}
          height={52}
          rx={14}
          fill="#0d0d12"
          stroke={hot ? "#c8ff3d" : "rgb(255 255 255 / 0.14)"}
          strokeWidth={hot ? 1.6 : 1}
          style={{ transition: "stroke .3s" }}
        />
        <text y={-3} textAnchor="middle" fill="#ececf1" fontSize={12.5} fontWeight={600}>
          {n.label}
        </text>
        <text y={14} textAnchor="middle" fill="#8b8b98" fontSize={9.5} fontFamily="var(--font-geist-mono)">
          {n.sub}
        </text>
      </g>
    );
  };

  const toneClass = { info: "text-mute", ok: "text-accent", warn: "text-[#ffb347]", bad: "text-[#ff5d5d]" } as const;

  return (
    <Section
      id="lab"
      index="04 — AI tooling & open source"
      title={
        <>
          Engineering depth, <span className="serif text-accent">made interactive.</span>
        </>
      }
    >
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,22rem)]">
          <div>
            <h3 className="flex flex-wrap items-baseline gap-3 text-2xl font-semibold tracking-tight">
              Agent Gate
              <a href={sideProjects[0].href} target="_blank" rel="noreferrer" className="font-mono text-xs font-normal text-accent hover:underline">
                View on GitHub ↗
              </a>
            </h3>
            <p className="mt-2 max-w-2xl text-fg/75">
              {sideProjects[0].summary} Try it below: low-risk calls flow straight through; risky ones pause until a human decides.
            </p>
          </div>
          <ul className="space-y-2 text-sm text-mute">
            {sideProjects[0].bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-accent">▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Spot className="mt-10 overflow-hidden p-4 md:p-6">
          <div className="overflow-x-auto">
            <svg viewBox="0 0 880 310" className="mx-auto min-w-[680px] w-full" role="img" aria-label="Animated diagram of an agent request passing through a policy gateway, an approval queue and an audit trace">
              <defs>
                <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              {/* static wiring */}
              <g fill="none" stroke="rgb(255 255 255 / 0.16)" strokeWidth={1.4}>
                <path d="M142 150 H238" />
                <path d="M362 150 H738" />
                <path d="M362 150 C 450 150, 450 262, 488 262" strokeDasharray="4 5" />
                <path d="M612 262 C 700 262, 700 190, 780 176" strokeDasharray="4 5" />
                <path d="M330 124 C 380 38, 440 38, 488 38" strokeDasharray="2 5" />
              </g>
              {(Object.keys(N) as K[]).map(node)}
              <motion.circle r={14} cx={px} cy={py} fill={color} opacity={0.5} filter="url(#glow)" />
              <motion.circle r={6} cx={px} cy={py} fill={color} />
            </svg>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[auto_1fr] md:items-stretch">
            <div className="flex flex-wrap gap-2 md:w-60 md:flex-col">
              <button
                onClick={() => run("low")}
                disabled={phase === "running" || phase === "waiting"}
                className="rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-left text-sm transition hover:border-accent/60 disabled:opacity-40"
              >
                <span className="font-medium">Send low-risk request</span>
                <span className="block font-mono text-xs text-mute">GET /orders/4821</span>
              </button>
              <button
                onClick={() => run("high")}
                disabled={phase === "running" || phase === "waiting"}
                className="rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-left text-sm transition hover:border-[#ffb347]/60 disabled:opacity-40"
              >
                <span className="font-medium">Send high-risk request</span>
                <span className="block font-mono text-xs text-mute">POST /payments/refund</span>
              </button>
              {phase === "waiting" && (
                <div className="flex w-full gap-2">
                  <button onClick={() => decide.current?.(true)} className="flex-1 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-black">
                    Approve
                  </button>
                  <button onClick={() => decide.current?.(false)} className="flex-1 rounded-xl border border-[#ff5d5d]/60 px-4 py-3 text-sm text-[#ff5d5d]">
                    Deny
                  </button>
                </div>
              )}
            </div>
            <div aria-live="polite" className="min-h-40 rounded-xl border border-line bg-black/40 p-4 font-mono text-[0.78rem] leading-relaxed">
              {log.map((l, i) => (
                <div key={i} className={toneClass[l.tone]}>
                  <span className="text-fg/30">{String(i + 1).padStart(2, "0")} </span>
                  {l.t}
                </div>
              ))}
            </div>
          </div>
        </Spot>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {sideProjects[0].stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Reveal>

      <div className={`mt-20 grid gap-4 ${sideProjects.length > 2 ? "md:grid-cols-2" : ""}`}>
        {sideProjects.slice(1).map((s, i) => (
          <Reveal key={s.name} delay={i * 0.1}>
            <Spot className="flex h-full flex-col p-6 md:p-8">
              <div className="mono-label text-accent">{s.kind}</div>
              <h3 className="mt-3 flex flex-wrap items-baseline gap-3 text-2xl font-semibold tracking-tight">
                {s.name}
                {s.href && (
                  <a href={s.href} target="_blank" rel="noreferrer" className="font-mono text-xs font-normal text-accent hover:underline">
                    View on GitHub ↗
                  </a>
                )}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-fg/75">{s.summary}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-mute">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-accent">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Spot>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
