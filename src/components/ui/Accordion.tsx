"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionEntry {
  q: string;
  a: string;
}

export function Accordion({
  items,
  tone = "dark",
  className,
}: {
  items: AccordionEntry[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduce = useReducedMotion();
  const light = tone === "light";

  return (
    <div className={cn("divide-y", light ? "divide-white/10" : "divide-sand", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                id={`${baseId}-t-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-p-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-6 py-6 text-start text-lg font-semibold transition-colors",
                  light
                    ? "text-ivory hover:text-gold-soft"
                    : "text-ink hover:text-brand"
                )}
              >
                <span>{item.q}</span>
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border transition-transform duration-300",
                    isOpen && "rotate-45",
                    light
                      ? "border-white/20 text-gold-soft"
                      : "border-sand text-gold"
                  )}
                  aria-hidden
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${baseId}-p-${i}`}
                  role="region"
                  aria-labelledby={`${baseId}-t-${i}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "pb-6 pe-14 leading-relaxed",
                      light ? "text-ivory/70" : "text-ink/70"
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
