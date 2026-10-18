"use client";

import { stats } from "@/lib/data";
import { CountUp, Reveal, Section, Spot } from "./ui";

export default function Stats() {
  return (
    <Section
      id="impact"
      index="01 — Impact"
      title={
        <>
          Outcomes, <span className="serif text-accent">not just features.</span>
        </>
      }
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <Spot className="h-full p-5 md:p-7">
              <div className="text-5xl font-semibold tracking-tight md:text-6xl">
                <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm font-medium">{s.label}</div>
              <div className="mt-1 text-xs text-mute">{s.note}</div>
            </Spot>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-6 text-xs text-mute">ContentPilot conversion figure as reported after launch.</p>
      </Reveal>
    </Section>
  );
}
