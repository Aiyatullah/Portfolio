"use client";

import { skills } from "@/lib/data";
import { Reveal, Section, Spot } from "./ui";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="05 — Stack"
      title={
        <>
          The stack I <span className="serif text-accent">build with.</span>
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.08}>
            <Spot className="h-full p-6">
              <div className="mono-label mb-4 text-accent">{g.group}</div>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-[0.98rem] text-fg/85 transition-colors hover:text-accent">
                    {it}
                  </li>
                ))}
              </ul>
            </Spot>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
