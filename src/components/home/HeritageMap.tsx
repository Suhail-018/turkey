"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Landmark, Building2, Store } from "lucide-react";
import { getDict, t, type Locale } from "@/i18n";
import { heritageSites } from "@/data/sites";
import { getTour } from "@/data/tours";
import { StarGlyph } from "@/components/decor/Ornament";
import { cn } from "@/lib/utils";

const typeStyles: Record<string, { color: string; ring: string }> = {
  mosque: { color: "bg-brand text-white", ring: "ring-brand/30" },
  shrine: { color: "bg-gold text-night", ring: "ring-gold/40" },
  palace: { color: "bg-forest text-ivory", ring: "ring-forest/30" },
  market: { color: "bg-olive text-white", ring: "ring-olive/30" },
};

function TypeIcon({ type, className }: { type: string; className?: string }) {
  if (type === "shrine") return <StarGlyph className={className} />;
  if (type === "palace") return <Building2 className={className} aria-hidden />;
  if (type === "market") return <Store className={className} aria-hidden />;
  return <Landmark className={className} aria-hidden />;
}

export function HeritageMap({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [activeId, setActiveId] = useState<string | null>("eyup-sultan");
  const active = heritageSites.find((s) => s.id === activeId) ?? null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
      {/* Illustrated map canvas */}
      <div className="pattern-star relative overflow-hidden rounded-[1.5rem] border border-sand bg-[#f2ede3] shadow-card">
        {/* Waterways: Golden Horn + Bosphorus, abstracted */}
        <svg
          viewBox="0 0 100 80"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M-2 30 C 18 20, 34 24, 50 16 C 60 11, 66 4, 70 -2 L 84 -2 C 80 8, 74 18, 66 26 C 58 34, 44 36, 30 38 C 18 40, 8 38, -2 42 Z"
            fill="#cfe0da"
            opacity="0.9"
          />
          <path
            d="M70 -2 C 76 10, 78 26, 76 40 C 74 54, 76 68, 82 82 L 100 82 L 100 -2 Z"
            fill="#cfe0da"
            opacity="0.9"
          />
        </svg>

        <div className="relative aspect-[5/4] w-full sm:aspect-[16/11]">
          {heritageSites.map((site) => {
            const style = typeStyles[site.type];
            const isActive = site.id === activeId;
            return (
              <button
                key={site.id}
                onClick={() => setActiveId(site.id)}
                className={cn(
                  "group absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-110 focus-visible:scale-110",
                  isActive && "z-10 scale-110"
                )}
                style={{ left: `${site.x}%`, top: `${site.y}%` }}
                aria-pressed={isActive}
                aria-label={t(site.name, locale)}
              >
                <span
                  className={cn(
                    "grid size-9 place-items-center rounded-full shadow-card ring-4 transition-all sm:size-10",
                    style.color,
                    isActive ? style.ring : "ring-white/60"
                  )}
                >
                  <TypeIcon type={site.type} className="size-4" />
                </span>
                <span
                  className={cn(
                    "absolute start-1/2 top-full mt-1.5 -translate-x-1/2 rounded-full bg-night/85 px-2.5 py-0.5 text-[10px] font-semibold whitespace-nowrap text-ivory backdrop-blur-sm transition-opacity rtl:translate-x-1/2",
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  )}
                >
                  {t(site.name, locale)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="relative flex flex-wrap gap-x-5 gap-y-2 border-t border-sand/80 bg-white/70 px-6 py-4 text-xs font-semibold text-ink/70 backdrop-blur-sm">
          {(Object.keys(typeStyles) as (keyof typeof dict.map.legend)[]).map(
            (type) => (
              <span key={type} className="inline-flex items-center gap-2">
                <span
                  className={cn(
                    "grid size-5 place-items-center rounded-full",
                    typeStyles[type].color
                  )}
                >
                  <TypeIcon type={type} className="size-2.5" />
                </span>
                {dict.map.legend[type]}
              </span>
            )
          )}
        </div>
      </div>

      {/* Story panel */}
      <div className="relative min-h-72">
        <AnimatePresence mode="wait">
          {active && (
            <motion.aside
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex h-full flex-col rounded-[1.5rem] bg-forest p-8 text-ivory shadow-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow mb-2 text-[11px]">
                    {t(active.district, locale)}
                  </p>
                  <h3 className="font-display text-2xl leading-snug">
                    {t(active.name, locale)}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveId(null)}
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-white/20 text-ivory/70 transition-colors hover:text-ivory"
                  aria-label={dict.map.close}
                >
                  <X className="size-4" />
                </button>
              </div>

              <p className="mt-4 flex-1 leading-relaxed text-ivory/75">
                {t(active.blurb, locale)}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-bold tracking-wider text-gold-soft uppercase">
                  {dict.map.explore}
                </p>
                <ul className="space-y-2">
                  {active.tourSlugs.map((slug) => {
                    const tour = getTour(slug);
                    if (!tour) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/${locale}/tours/${slug}`}
                          className="group flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                        >
                          {t(tour.title, locale)}
                          <ArrowRight className="size-4 shrink-0 text-gold transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
