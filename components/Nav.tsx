"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export const sections = [
  { id: "home", label: "Home" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Products" },
  { id: "lab", label: "Agent Gate" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ onPalette }: { onPalette: () => void }) {
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-accent" style={{ scaleX: progress }} />
      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
        <nav className="flex max-w-full items-center gap-1 rounded-full border border-line bg-black/50 p-1.5 backdrop-blur-xl">
          <a href="#home" className="px-3 font-serif text-xl italic leading-none">
            sa<span className="text-accent">.</span>
          </a>
          <div className="hidden items-center md:flex">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative rounded-full px-3.5 py-1.5 text-[0.82rem] transition-colors ${
                  active === s.id ? "text-black" : "text-mute hover:text-fg"
                }`}
              >
                {active === s.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-accent" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                {s.label}
              </a>
            ))}
          </div>
          <button
            onClick={onPalette}
            className="ml-1 hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[0.78rem] text-mute transition hover:text-fg sm:flex"
            aria-label="Open command menu"
          >
            Menu <kbd className="rounded bg-white/10 px-1.5 font-mono text-[0.65rem]">⌘K</kbd>
          </button>
          <a
            href={profile.resume}
            download
            className="rounded-full bg-fg px-4 py-1.5 text-[0.82rem] font-medium text-black transition hover:bg-accent"
          >
            Résumé
          </a>
          <button onClick={onPalette} className="rounded-full border border-line px-3 py-1.5 text-[0.82rem] md:hidden" aria-label="Open menu">
            ☰
          </button>
        </nav>
      </header>
    </>
  );
}
