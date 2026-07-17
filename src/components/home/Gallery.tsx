"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { t, type Locale, type Localized } from "@/i18n";
import { img } from "@/data/images";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

interface Shot {
  src: string;
  caption: Localized;
  tall?: boolean;
}

const shots: Shot[] = [
  {
    src: img.heroDusk,
    caption: { en: "Sultanahmet at dusk", ar: "السلطان أحمد عند الغسق" },
    tall: true,
  },
  {
    src: img.galataBirds,
    caption: { en: "Birds over Galata, golden hour", ar: "طيور فوق غلطة في الساعة الذهبية" },
  },
  {
    src: img.iznikPanel,
    caption: { en: "Iznik calligraphy, Süleymaniye", ar: "خط إزنيقي، السليمانية" },
  },
  {
    src: img.hagiaInterior,
    caption: { en: "Lamplight under old vaults", ar: "ضوء القناديل تحت العقود القديمة" },
    tall: true,
  },
  {
    src: img.bosphorus,
    caption: { en: "The skyline from the water", ar: "الأفق من الماء" },
  },
  {
    src: img.topkapiCeiling,
    caption: { en: "A painted dome, Topkapı", ar: "قبة منقوشة، توبكابي" },
  },
  {
    src: img.yesilTurbe,
    caption: { en: "Muqarnas of the Green Tomb, Bursa", ar: "مقرنصات التربة الخضراء، بورصة" },
    tall: true,
  },
  {
    src: img.cappadocia,
    caption: { en: "First light, Cappadocia", ar: "أول الضوء، كبادوكيا" },
  },
];

export function Gallery({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? v : (v + 1) % shots.length));
      if (e.key === "ArrowLeft")
        setOpen((v) => (v === null ? v : (v - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Stagger className="columns-2 gap-4 space-y-4 lg:columns-4" gap={0.06}>
        {shots.map((shot, i) => (
          <StaggerItem key={i} className="break-inside-avoid">
            <button
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-[1.25rem] shadow-soft transition-shadow hover:shadow-card"
              aria-label={t(shot.caption, locale)}
            >
              <Image
                src={shot.src}
                alt={t(shot.caption, locale)}
                width={720}
                height={shot.tall ? 960 : 540}
                className="w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 start-4 text-start text-sm font-medium text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
                {t(shot.caption, locale)}
              </span>
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={t(shots[open].caption, locale)}
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute end-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 text-ivory transition-colors hover:bg-white/10"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <button
              className="absolute start-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-ivory transition-colors hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((open - 1 + shots.length) % shots.length);
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="size-5 rtl:rotate-180" />
            </button>
            <button
              className="absolute end-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-ivory transition-colors hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((open + 1) % shots.length);
              }}
              aria-label="Next"
            >
              <ChevronRight className="size-5 rtl:rotate-180" />
            </button>
            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={shots[open].src}
                alt={t(shots[open].caption, locale)}
                width={1400}
                height={1000}
                className="max-h-[80vh] w-auto rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-ivory/70">
                {t(shots[open].caption, locale)}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
