"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { getDict, t, type Locale, type Localized } from "@/i18n";
import { img } from "@/data/images";
import { Reveal } from "@/components/motion/Reveal";

interface Chapter {
  src: string;
  title: Localized;
}

const chapters: Chapter[] = [
  { src: img.mosqueSunrise, title: { en: "I. The city at first light", ar: "١. المدينة مع أول الضوء" } },
  { src: img.eyupSultan, title: { en: "II. The Companion at the walls", ar: "٢. الصحابي عند الأسوار" } },
  { src: img.hagiaInterior, title: { en: "III. Lamplight and stone", ar: "٣. ضوء القناديل والحجر" } },
  { src: img.suleymaniyeHorn, title: { en: "IV. The skyline of Sinan", ar: "٤. أفق سنان" } },
  { src: img.galataBirds, title: { en: "V. The birds take the morning", ar: "٥. الطيور تأخذ الصباح" } },
];

export function FilmSection({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [open, setOpen] = useState(false);
  const [chapter, setChapter] = useState(0);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(
      () => setChapter((c) => (c + 1) % chapters.length),
      4200
    );
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearInterval(id);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="film" className="relative scroll-mt-20 overflow-hidden bg-night">
      <div className="absolute inset-0">
        <Image
          src={img.mosqueSunrise}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/40 to-night" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow mb-4">{dict.film.eyebrow}</p>
          <h2 className="font-display text-4xl text-ivory sm:text-6xl">
            {dict.film.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ivory/70">
            {dict.film.lead}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <button
            onClick={() => {
              setChapter(0);
              setOpen(true);
            }}
            className="group flex flex-col items-center gap-4"
          >
            <span className="relative grid size-24 place-items-center rounded-full border border-gold/50 bg-gold/10 text-gold-soft backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-gold group-hover:text-night">
              <span
                className="absolute inset-0 animate-ping rounded-full border border-gold/30 [animation-duration:3s]"
                aria-hidden
              />
              <Play className="size-8 fill-current ps-1" aria-hidden />
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] text-ivory/80 uppercase">
              {dict.film.play} · {dict.film.duration}
            </span>
          </button>
        </Reveal>
      </div>

      {/* Immersive chapter player */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-night"
            role="dialog"
            aria-modal="true"
            aria-label={dict.film.title}
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={chapter}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={chapters[chapter].src}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-night/50" />
              </motion.div>
            </AnimatePresence>

            <button
              className="absolute end-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-white/25 text-ivory transition-colors hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label={dict.map.close}
            >
              <X className="size-5" />
            </button>

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
              <motion.p
                key={`t-${chapter}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-2xl text-ivory sm:text-4xl"
              >
                {t(chapters[chapter].title, locale)}
              </motion.p>
              <div className="mt-6 flex gap-2">
                {chapters.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setChapter(i)}
                    aria-label={`Chapter ${i + 1}`}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i === chapter ? "bg-gold" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
