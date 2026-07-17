import Image from "next/image";
import type { Metadata } from "next";
import { BookOpen, HandHeart, Star } from "lucide-react";
import { isLocale, getDict, type Locale } from "@/i18n";
import { guides } from "@/data/guides";
import { img } from "@/data/images";
import { PageHero } from "@/components/layout/PageHero";
import { GuideCard } from "@/components/cards/GuideCard";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Parallax } from "@/components/motion/Parallax";
import { OrnamentRule } from "@/components/decor/Ornament";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.about };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);

  const values = [
    { icon: BookOpen, ...dict.aboutPage.values.knowledge },
    { icon: Star, ...dict.aboutPage.values.reverence },
    { icon: HandHeart, ...dict.aboutPage.values.hospitality },
  ];

  const numbers = [
    { value: 12, suffix: "+", label: dict.aboutPage.numbers.years },
    { value: 18, suffix: "k+", label: dict.aboutPage.numbers.travelers },
    { value: 4.96, suffix: "", decimals: 2, label: dict.aboutPage.numbers.rating },
    { value: 9, suffix: "", label: dict.aboutPage.numbers.guides },
  ];

  return (
    <>
      <PageHero
        eyebrow={dict.aboutPage.eyebrow}
        title={dict.aboutPage.title}
        lead={dict.aboutPage.lead}
        image={img.suleymaniyeHorn}
      />

      {/* Mission */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">{dict.aboutPage.mission.title}</p>
          <div className="prose-editorial">
            <p>{dict.aboutPage.mission.p1}</p>
            <p>{dict.aboutPage.mission.p2}</p>
          </div>
        </Reveal>
        <Parallax amount={35} className="arch relative aspect-[3/4] shadow-lift">
          <Image
            src={img.eyupSultan}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="scale-110 object-cover"
          />
        </Parallax>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-forest py-24 text-ivory">
        <div className="pattern-star-light absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl">{dict.aboutPage.values.title}</h2>
            <OrnamentRule className="mt-6" />
          </Reveal>
          <Stagger className="mt-14 grid gap-8 md:grid-cols-3" gap={0.12}>
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-9 text-center"
              >
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-gold/15 text-gold-soft">
                  <v.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/70">{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Numbers */}
          <div className="mt-16 grid grid-cols-2 gap-y-8 rounded-[1.5rem] border border-white/10 bg-night/40 px-6 py-10 backdrop-blur-sm lg:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label} className="text-center">
                <p className="font-display text-4xl text-gold-soft">
                  <CountUp to={n.value} suffix={n.suffix} decimals={n.decimals ?? 0} />
                </p>
                <p className="mt-1.5 text-xs font-medium text-ivory/60">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow mb-4">{dict.guides.eyebrow}</p>
          <h2 className="font-display text-4xl text-ink">
            {dict.aboutPage.team.title}
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid gap-8 md:grid-cols-2" gap={0.1}>
          {guides.map((g) => (
            <StaggerItem key={g.slug} className="h-full">
              <GuideCard guide={g} locale={locale} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-14 text-center">
          <Button href={`/${locale}/tours`} size="lg">
            {dict.aboutPage.cta}
          </Button>
        </Reveal>
      </section>
    </>
  );
}
