"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getDict, t, type Locale } from "@/i18n";
import { timeline } from "@/data/timeline";
import { getTour } from "@/data/tours";
import { StarGlyph } from "@/components/decor/Ornament";
import { cn } from "@/lib/utils";

export function Timeline({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [active, setActive] = useState(1); // start at the Companions

  const era = timeline[active];
  const tour = era.tourSlug ? getTour(era.tourSlug) : undefined;

  return (
    <div>
      {/* Era rail */}
      <div
        className="scrollbar-none -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label={dict.timeline.title}
      >
        <div className="relative flex min-w-max items-start gap-2 pb-2 sm:min-w-0 sm:justify-between">
          {/* the golden thread */}
          <div
            className="absolute inset-x-6 top-[13px] h-px bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10"
            aria-hidden
          />
          {timeline.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className="group relative flex w-24 flex-col items-center gap-3 sm:w-auto sm:flex-1"
              >
                <span
                  className={cn(
                    "grid size-7 place-items-center rounded-full border transition-all duration-300",
                    isActive
                      ? "scale-110 border-gold bg-gold text-night shadow-glow"
                      : "border-gold/40 bg-night text-gold/60 group-hover:border-gold group-hover:text-gold"
                  )}
                >
                  <StarGlyph className="size-3" />
                </span>
                <span
                  className={cn(
                    "text-center text-xs font-bold tracking-wide transition-colors",
                    isActive ? "text-gold-soft" : "text-ivory/50 group-hover:text-ivory/80"
                  )}
                >
                  {t(item.year, locale)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Era detail */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h3 className="font-display text-3xl text-ivory sm:text-4xl">
              {t(era.title, locale)}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ivory/70">
              {t(era.text, locale)}
            </p>
            {tour && (
              <Link
                href={`/${locale}/tours/${tour.slug}`}
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold-soft transition-all hover:border-gold hover:bg-gold/10"
              >
                {dict.timeline.relatedJourney}: {t(tour.title, locale)}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
