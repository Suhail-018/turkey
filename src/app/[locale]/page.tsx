import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Users } from "lucide-react";
import { isLocale, getDict, t, type Locale } from "@/i18n";
import { featuredTours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { guides, reviews } from "@/data/guides";
import { articles } from "@/data/articles";
import { faqs } from "@/data/faqs";
import { img } from "@/data/images";
import { Hero } from "@/components/home/Hero";
import { HeroSearch } from "@/components/home/HeroSearch";
import { HeritageMap } from "@/components/home/HeritageMap";
import { Timeline } from "@/components/home/Timeline";
import { Gallery } from "@/components/home/Gallery";
import { FilmSection } from "@/components/home/FilmSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Stars } from "@/components/ui/Stars";
import { TourCard } from "@/components/cards/TourCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { CountUp } from "@/components/motion/CountUp";
import { OrnamentRule } from "@/components/decor/Ornament";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);
  const p = (path: string) => `/${locale}${path}`;

  const spotlight = featuredTours[0];
  const rest = featuredTours.slice(1, 4);

  return (
    <>
      <Hero locale={locale} />
      <HeroSearch locale={locale} />

      {/* ——— Featured journeys ——— */}
      <section className="mx-auto max-w-7xl px-5 pt-24 pb-28 sm:px-8">
        <SectionHeading
          eyebrow={dict.featured.eyebrow}
          title={dict.featured.title}
          lead={dict.featured.lead}
        />

        {/* Spotlight: the Sahaba journey */}
        <Reveal className="mt-14">
          <Link
            href={p(`/tours/${spotlight.slug}`)}
            className="group grid overflow-hidden rounded-[1.5rem] bg-forest shadow-card transition-all duration-500 hover:shadow-lift lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={spotlight.image}
                alt={t(spotlight.title, locale)}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent lg:bg-gradient-to-r lg:rtl:bg-gradient-to-l" />
            </div>
            <div className="flex flex-col justify-center p-8 text-ivory lg:p-12">
              <div className="flex items-center gap-2">
                <Stars rating={spotlight.rating} />
                <span className="text-xs font-semibold text-ivory/70">
                  {spotlight.rating.toFixed(2)} · {spotlight.reviewCount}{" "}
                  {dict.tourCard.reviews}
                </span>
              </div>
              <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                {t(spotlight.title, locale)}
              </h3>
              <p className="mt-4 leading-relaxed text-ivory/75">
                {t(spotlight.story[0], locale).slice(0, 220)}…
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ivory/70">
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-gold" aria-hidden />
                  {t(spotlight.duration, locale)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="size-4 text-gold" aria-hidden />
                  {dict.tourDetail.upTo} {spotlight.groupSize}{" "}
                  {dict.tourDetail.people}
                </span>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-6">
                <p>
                  <span className="text-sm text-ivory/60">
                    {dict.tourCard.from}{" "}
                  </span>
                  <span className="font-display text-3xl text-gold-soft">
                    ${spotlight.price}
                  </span>
                  <span className="ms-1 text-sm text-ivory/60">
                    {dict.tourCard.perPerson}
                  </span>
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-gold-soft">
                  {dict.tourCard.view}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        <Stagger className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((tour) => (
            <StaggerItem key={tour.slug} className="h-full">
              <TourCard tour={tour} locale={locale} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 text-center">
          <Button href={p("/tours")} variant="outline" size="lg">
            {dict.featured.viewAll}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </Button>
        </Reveal>
      </section>

      {/* ——— Heritage introduction (editorial, forest) ——— */}
      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="pattern-star-light absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">{dict.intro.eyebrow}</p>
            <h2 className="font-display text-4xl leading-[1.1] text-balance sm:text-5xl">
              {dict.intro.title}
            </h2>
            <div className="prose-editorial mt-8 !text-ivory/80 [&>p:first-of-type]:first-letter:!text-gold">
              <p>{dict.intro.p1}</p>
              <p>{dict.intro.p2}</p>
            </div>
            <div className="mt-10">
              <Button href={p("/about")} variant="light" size="lg">
                {dict.intro.cta}
                <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
              </Button>
            </div>
          </Reveal>

          <div className="relative">
            <Parallax amount={40} className="arch relative aspect-[3/4] shadow-lift">
              <Image
                src={img.iznikPanel}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="scale-110 object-cover"
              />
            </Parallax>
            <Reveal
              delay={0.25}
              className="absolute -bottom-8 -start-4 rounded-[1.25rem] border border-white/10 bg-night/80 px-7 py-6 shadow-lift backdrop-blur-md sm:-start-10"
            >
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-3xl text-gold-soft">
                    <CountUp to={83} />
                  </p>
                  <p className="mt-1 max-w-24 text-xs text-ivory/60">
                    {dict.intro.stats.sites}
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold-soft">
                    <CountUp to={14} />
                  </p>
                  <p className="mt-1 max-w-24 text-xs text-ivory/60">
                    {dict.intro.stats.centuries}
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold-soft">
                    <CountUp to={9} />
                  </p>
                  <p className="mt-1 max-w-24 text-xs text-ivory/60">
                    {dict.intro.stats.scholars}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Interactive heritage map ——— */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeading
          eyebrow={dict.map.eyebrow}
          title={dict.map.title}
          lead={dict.map.lead}
        />
        <Reveal className="mt-14">
          <HeritageMap locale={locale} />
        </Reveal>
      </section>

      {/* ——— Destinations (horizontal scroll) ——— */}
      <section className="overflow-hidden bg-sand/40 py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="start"
              eyebrow={dict.destinationsSection.eyebrow}
              title={dict.destinationsSection.title}
              lead={dict.destinationsSection.lead}
              className="max-w-xl"
            />
            <Reveal delay={0.1}>
              <Button href={p("/destinations")} variant="outline">
                {dict.common.viewAll}
                <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
              </Button>
            </Reveal>
          </div>
        </div>
        <Stagger
          gap={0.07}
          className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {destinations.map((d) => (
            <StaggerItem
              key={d.slug}
              className="w-72 shrink-0 snap-start sm:w-80"
            >
              <DestinationCard destination={d} locale={locale} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ——— Historical timeline (night) ——— */}
      <section className="relative overflow-hidden bg-night py-28">
        <div className="pattern-star-light absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            eyebrow={dict.timeline.eyebrow}
            title={dict.timeline.title}
            lead={dict.timeline.lead}
          />
          <Reveal className="mt-16">
            <Timeline locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* ——— Guides & scholars ——— */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeading
          eyebrow={dict.guides.eyebrow}
          title={dict.guides.title}
          lead={dict.guides.lead}
        />
        <Stagger className="mt-14 grid gap-8 md:grid-cols-2" gap={0.1}>
          {guides.map((g) => (
            <StaggerItem key={g.slug} className="h-full">
              <GuideCard guide={g} locale={locale} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ——— Traveler stories ——— */}
      <section className="bg-sand/40 py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={dict.stories.eyebrow}
            title={dict.stories.title}
            lead={dict.stories.lead}
          />
          <Stagger className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {reviews.slice(0, 3).map((r, i) => (
              <StaggerItem key={i} className="h-full">
                <ReviewCard review={r} locale={locale} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 text-center">
            <Button href={p("/reviews")} variant="ghost" size="lg">
              {dict.common.viewAll}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ——— Documentary ——— */}
      <FilmSection locale={locale} />

      {/* ——— Gallery ——— */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeading
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          lead={dict.gallery.lead}
        />
        <div className="mt-14">
          <Gallery locale={locale} />
        </div>
      </section>

      {/* ——— Articles ——— */}
      <section className="bg-sand/40 py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={dict.articles.eyebrow}
            title={dict.articles.title}
            lead={dict.articles.lead}
          />
          <Reveal className="mt-14">
            <ArticleCard article={articles[0]} locale={locale} featured />
          </Reveal>
          <Stagger className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {articles.slice(1, 4).map((a) => (
              <StaggerItem key={a.slug} className="h-full">
                <ArticleCard article={a} locale={locale} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 text-center">
            <Button href={p("/heritage")} variant="outline" size="lg">
              {dict.articles.viewAll}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
        <SectionHeading
          eyebrow={dict.faq.eyebrow}
          title={dict.faq.title}
          lead={dict.faq.lead}
        />
        <Reveal className="mt-12">
          <Accordion
            items={faqs.slice(0, 5).map((f) => ({
              q: t(f.q, locale),
              a: t(f.a, locale),
            }))}
          />
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Button href={p("/faq")} variant="ghost">
            {dict.faq.more}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </Button>
        </Reveal>
        <OrnamentRule className="mt-16" />
      </section>
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
