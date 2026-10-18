"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { profile } from "@/lib/data";
import { sections } from "./Nav";

type Item = { label: string; hint: string; run: () => void };

export default function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  const items: Item[] = useMemo(
    () => [
      ...sections.map((s) => ({
        label: `Go to ${s.label}`,
        hint: "Navigate",
        run: () => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      { label: "Download résumé", hint: "PDF", run: () => window.open(profile.resume, "_blank") },
      { label: "Copy email address", hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      { label: "Open LinkedIn", hint: "↗", run: () => window.open(profile.linkedin, "_blank") },
      { label: "Open GitHub", hint: "↗", run: () => window.open(profile.github, "_blank") },
      { label: "Open LeetCode", hint: "↗", run: () => window.open(profile.leetcode, "_blank") },
    ],
    [],
  );
  const list = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
    }
  }, [open]);

  const run = (i?: Item) => {
    if (!i) return;
    setOpen(false);
    i.run();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-[18vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-label="Command menu"
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            initial={{ y: -12, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -12, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setSel(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setSel((s) => Math.min(s + 1, list.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setSel((s) => Math.max(s - 1, 0));
                } else if (e.key === "Enter") run(list[sel]);
              }}
              placeholder="Type a command or jump to a section…"
              className="w-full border-b border-line bg-transparent px-5 py-4 text-sm outline-none placeholder:text-mute"
            />
            <ul className="max-h-72 overflow-auto p-2">
              {list.map((i, idx) => (
                <li key={i.label}>
                  <button
                    onMouseEnter={() => setSel(idx)}
                    onClick={() => run(i)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm ${
                      idx === sel ? "bg-accent text-black" : "text-fg/80"
                    }`}
                  >
                    {i.label}
                    <span className={`font-mono text-xs ${idx === sel ? "text-black/60" : "text-mute"}`}>{i.hint}</span>
                  </button>
                </li>
              ))}
              {!list.length && <li className="px-3 py-6 text-center text-sm text-mute">No results</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
