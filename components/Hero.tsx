"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { Magnetic, Scramble } from "./ui";

const roles = ["Backend engineer", "Agentic AI builder", "Multi-tenant SaaS architect", "Team lead"];

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () =>
      setT(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }));
    f();
    const id = setInterval(f, 15000);
    return () => clearInterval(id);
  }, []);
  return <span>{t || "--:--"} IST</span>;
}

export default function Hero() {
  const [r, setR] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setR((v) => (v + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const line = (i: number) => ({
    initial: { y: "105%" },
    animate: { y: 0 },
    transition: { duration: 1, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="home" className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-8 flex flex-wrap items-center gap-3"
      >
        <span className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs text-accent">
          <span className="blink h-1.5 w-1.5 rounded-full bg-accent" /> Open to Backend / AI engineering roles
        </span>
        <span className="mono-label">
          {profile.location.split(",")[0]} · <Clock />
        </span>
      </motion.div>

      <h1 className="text-[clamp(2.6rem,8.4vw,7.2rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
        <span className="block overflow-hidden pb-[0.1em]">
          <motion.span className="block" {...line(0)}>
            Saiyed Aiyatullah
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.12em]">
          <motion.span className="block text-mute" {...line(1)}>
            engineers <span className="serif text-fg">backends</span>
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.12em]">
          <motion.span className="block text-mute" {...line(2)}>
            for <span className="serif text-accent">AI products.</span>
          </motion.span>
        </span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="mt-10 max-w-xl"
      >
        <p className="mb-3 font-mono text-sm text-accent">
          &gt; <Scramble text={roles[r]} />
          <span className="blink">_</span>
        </p>
        <p className="text-base leading-relaxed text-mute md:text-lg">
          Software Engineer at EnactOn Technologies. I design and ship multi-tenant SaaS backends, agentic AI pipelines and
          workflow automation for Swiss and global clients, and own delivery from system design to launch.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <Magnetic>
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black">
            See what I've shipped <span aria-hidden>↓</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a href={profile.resume} download className="inline-flex rounded-full border border-line bg-white/[0.04] px-6 py-3.5 text-sm backdrop-blur">
            Download résumé
          </a>
        </Magnetic>
        <div className="ml-1 flex items-center gap-1 text-sm text-mute">
          {[
            ["LinkedIn", profile.linkedin],
            ["GitHub", profile.github],
          ].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" className="rounded-full px-3 py-2 transition hover:text-accent">
              {l}↗
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mono-label absolute bottom-8 left-5 hidden items-center gap-3 sm:left-8 md:flex"
      >
        <span className="h-8 w-px bg-gradient-to-b from-transparent to-accent" /> Scroll — the particles morph
        <span className="text-fg/40">· move or click on the background</span>
      </motion.div>
    </section>
  );
}
