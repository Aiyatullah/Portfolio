"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Magnetic, Reveal, SplitWords } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello from ${name || "your portfolio"}`)}&body=${encodeURIComponent(msg)}`;

  return (
    <section id="contact" className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-24 sm:px-8 md:pt-32">
      <Reveal>
        <div className="mb-12 flex items-center gap-4">
          <span className="mono-label text-accent">06 — Contact</span>
          <span className="h-px flex-1 bg-line" />
        </div>
      </Reveal>
      <h2 className="text-[clamp(2.4rem,7.4vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
        <SplitWords text="Let's build something" />
        <br />
        <span className="serif text-accent">
          <SplitWords text="that ships." delay={0.3} />
        </span>
      </h2>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-mute">
            I'm looking for a backend / full-stack / AI engineering role where I can own hard problems end to end. The fastest way to reach me is email.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <button onClick={copy} className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black">
                {copied ? "Copied ✓" : profile.email}
              </button>
            </Magnetic>
            <Magnetic>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-line px-6 py-3.5 text-sm">
                LinkedIn ↗
              </a>
            </Magnetic>
          </div>
          <dl className="mt-10 space-y-3 text-sm">
            {[
              ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
              ["GitHub", "github.com/Aiyatullah", profile.github],
              ["LeetCode", "250+ solved", profile.leetcode],
              ["Based in", profile.location, ""],
            ].map(([k, v, h]) => (
              <div key={k} className="flex gap-6 border-b border-line pb-3">
                <dt className="mono-label w-24 pt-0.5">{k}</dt>
                <dd>
                  {h ? (
                    <a href={h} className="hover:text-accent" target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="spot space-y-4 rounded-3xl p-6 md:p-8"
          >
            <div className="mono-label">Quick message — opens your email app</div>
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name / company"
                className="w-full border-b border-line bg-transparent py-3 text-lg outline-none transition focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={5}
                required
                placeholder="Tell me about the role or project…"
                className="w-full resize-none border-b border-line bg-transparent py-3 text-lg outline-none transition focus:border-accent"
              />
            </label>
            <button type="submit" className="rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-accent">
              Send message →
            </button>
          </form>
        </Reveal>
      </div>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-mute">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span className="font-mono">Next.js · three.js · Tailwind · Motion</span>
      </footer>
    </section>
  );
}
