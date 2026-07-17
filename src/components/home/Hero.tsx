"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { getDict, type Locale } from "@/i18n";
import { img } from "@/data/images";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/motion/CountUp";
import { OrnamentRule } from "@/components/decor/Ornament";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stats = [
    { value: 12, suffix: "+", label: dict.hero.stats.years },
    { value: 18, suffix: "k+", label: dict.hero.stats.travelers },
    { value: 83, suffix: "", label: dict.hero.stats.sites },
    { value: 6, suffix: "", label: dict.hero.stats.cities },
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-night"
    >
      {/* Cinematic backdrop with slow drift */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY }}
      >
        <motion.div
          className="absolute inset-[-4%]"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: "easeOut" }}
        >
          <Image
            src={img.heroWide}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-night/55 via-night/20 to-night/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/50 via-transparent to-transparent rtl:bg-gradient-to-l" />
      </motion.div>

      {/* Copy */}
      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-16 sm:px-8"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="eyebrow mb-6"
        >
          {dict.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="max-w-3xl font-display text-5xl leading-[1.05] font-medium text-ivory text-balance sm:text-6xl lg:text-7xl"
        >
          {dict.hero.title}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80"
        >
          {dict.hero.lead}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={`/${locale}/tours`} variant="gold" size="lg">
            {dict.hero.ctaJourney}
          </Button>
          <Button href="#film" variant="light" size="lg">
            <Play className="size-4 fill-current" aria-hidden />
            {dict.hero.ctaFilm}
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating stats strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.9 }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8"
      >
        <div className="grid grid-cols-2 gap-y-6 rounded-[1.5rem] border border-white/10 bg-night/40 px-6 py-7 backdrop-blur-md sm:grid-cols-4 sm:px-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-white/10 text-center sm:border-s sm:first:border-s-0"
            >
              <p className="font-display text-3xl text-gold-soft sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs font-medium tracking-wide text-ivory/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="#search"
            className="flex flex-col items-center gap-1 text-ivory/50 transition-colors hover:text-ivory"
            aria-label={dict.hero.scroll}
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
              {dict.hero.scroll}
            </span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="size-4" aria-hidden />
            </motion.span>
          </a>
        </div>
      </motion.div>

      {/* Blend into the ivory page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-ivory/30 to-transparent" />
      <OrnamentRule className="sr-only" />
    </section>
  );
}
