"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { products } from "@/lib/data";
import { Reveal, Section, Tag } from "./ui";

export default function Products() {
  const [active, setActive] = useState(products[0].id);
  const p = products.find((x) => x.id === active)!;

  return (
    <Section
      id="work"
      index="03 — Products I ship"
      title={
        <>
          Products in production, built for <span className="serif text-accent">Swiss</span> and global clients.
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
        <div role="tablist" aria-label="Products" className="flex flex-col">
          {products.map((x, i) => (
            <Reveal key={x.id} delay={i * 0.07}>
              <button
                role="tab"
                aria-selected={active === x.id}
                onClick={() => setActive(x.id)}
                onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(x.id)}
                className={`group relative flex w-full items-baseline gap-4 border-t border-line py-6 text-left transition-colors last:border-b ${
                  active === x.id ? "text-fg" : "text-mute hover:text-fg"
                }`}
              >
                <span className="mono-label w-8 shrink-0" style={active === x.id ? { color: `hsl(${x.hue} 90% 72%)` } : undefined}>
                  0{i + 1}
                </span>
                <span className="flex-1">
                  <span className="block text-3xl font-semibold tracking-tight md:text-5xl">{x.name}</span>
                  <span className="mt-1 block text-sm text-mute">{x.kind}</span>
                </span>
                <span className={`text-2xl transition-transform ${active === x.id ? "translate-x-0 text-accent" : "-translate-x-2 opacity-0 group-hover:opacity-100"}`}>→</span>
                {active === x.id && (
                  <motion.span
                    layoutId="prod-bar"
                    className="absolute inset-y-0 left-0 w-px"
                    style={{ background: `hsl(${x.hue} 90% 65%)`, boxShadow: `0 0 18px hsl(${x.hue} 90% 60%)` }}
                  />
                )}
              </button>
            </Reveal>
          ))}
        </div>

        <div className="relative min-h-[28rem]">
          <AnimatePresence mode="wait">
            <motion.article
              key={p.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.35 }}
              className="spot overflow-hidden rounded-3xl p-6 md:p-9"
              style={{ boxShadow: `0 40px 120px -60px hsl(${p.hue} 90% 60% / 0.5)` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
                style={{ background: `hsl(${p.hue} 90% 60% / 0.22)` }}
              />
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[0.72rem]" style={{ color: `hsl(${p.hue} 90% 75%)` }}>
                    {p.badge}
                  </span>
                  {p.metric && (
                    <div className="text-right">
                      <div className="text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: `hsl(${p.hue} 90% 75%)` }}>
                        {p.metric.value}
                      </div>
                      <div className="mono-label">{p.metric.label}</div>
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">{p.name}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-fg/75">{p.summary}</p>
                <ul className="mt-6 space-y-3 text-[0.92rem] leading-relaxed text-fg/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: `hsl(${p.hue} 90% 65%)` }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
