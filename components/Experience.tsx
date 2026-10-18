"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { Reveal, Section, Tag } from "./ui";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="experience"
      index="02 — Experience"
      title={
        <>
          Owning client platforms, <span className="serif text-accent">end to end.</span>
        </>
      }
    >
      <div ref={ref} className="relative pl-8 md:pl-14">
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line md:left-[15px]" />
        <motion.div className="absolute left-[7px] top-2 w-px bg-accent md:left-[15px]" style={{ height: h }} />
        <div className="space-y-14">
          {experience.map((e) => (
            <Reveal key={e.period}>
              <div className="relative">
                <span className="absolute -left-8 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg md:-left-14 md:h-[17px] md:w-[17px]" />
                <div className="mono-label mb-2 text-accent">{e.period}</div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {e.role} <span className="serif text-mute">at {e.company}</span>
                </h3>
                <p className="mt-1 text-sm text-mute">{e.place}</p>
                <ul className="mt-5 max-w-2xl space-y-3 text-[0.95rem] leading-relaxed text-fg/80">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                  {e.awards.map((a) => (
                    <span key={a} className="rounded-full bg-accent px-3 py-1 font-mono text-[0.72rem] font-medium text-black">
                      ★ {a}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
