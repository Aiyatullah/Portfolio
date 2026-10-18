"use client";

import { education, publication } from "@/lib/data";
import { Reveal, Spot } from "./ui";

export default function Credentials() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 md:pb-32">
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <Spot className="h-full p-6 md:p-8">
            <div className="mono-label text-accent">Publication · {publication.note}</div>
            <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight md:text-2xl">{publication.title}</h3>
            <p className="mt-1 text-sm text-mute">{publication.venue}</p>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-fg/75">{publication.detail}</p>
          </Spot>
        </Reveal>
        <Reveal delay={0.1}>
          <Spot className="h-full p-6 md:p-8">
            <div className="mono-label text-accent">Education</div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-1 text-sm text-mute">
              {education.school} · {education.period}
            </p>
            <p className="serif mt-6 text-4xl">{education.score}</p>
          </Spot>
        </Reveal>
      </div>
    </section>
  );
}
