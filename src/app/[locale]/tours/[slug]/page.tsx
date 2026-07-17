import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Clock,
  Users,
  Languages,
  Car,
  Check,
  X,
  MessageCircle,
  ShieldCheck,
  CalendarCheck,
  Footprints,
} from "lucide-react";
import { isLocale, getDict, t, type Locale } from "@/i18n";
import { tours, getTour, tourCategories } from "@/data/tours";
import { reviews } from "@/data/guides";
import { Stars } from "@/components/ui/Stars";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { TourCard } from "@/components/cards/TourCard";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { OrnamentRule, StarGlyph } from "@/components/decor/Ornament";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    title: t(tour.title, locale),
    description: t(tour.tagline, locale),
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);
  const tour = getTour(slug);
  if (!tour) notFound();

  const p = (path: string) => `/${locale}${path}`;
  const category = tourCategories.find((c) => c.id === tour.category);
  const tourReviews = reviews.filter((r) => r.tourSlug === tour.slug);
  const related = tours
    .filter((x) => x.slug !== tour.slug && (x.category === tour.category || x.city === tour.city))
    .slice(0, 3);

  const facts = [
    { icon: Clock, label: dict.tourDetail.details.duration, value: t(tour.duration, locale) },
    {
      icon: Users,
      label: dict.tourDetail.details.groupSize,
      value: `${dict.tourDetail.upTo} ${tour.groupSize} ${dict.tourDetail.people}`,
    },
    { icon: Languages, label: dict.tourDetail.details.languages, value: tour.languages.join(" · ") },
    { icon: Car, label: dict.tourDetail.details.pickup, value: dict.tourDetail.details.pickupValue },
  ];

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-night">
        <Image
          src={tour.image}
          alt={t(tour.title, locale)}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-night/40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-44 pb-14 sm:px-8">
          <Reveal>
            {category && (
              <span className="mb-4 inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-night">
                {t(category.label, locale)}
              </span>
            )}
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-ivory text-balance sm:text-5xl lg:text-6xl">
              {t(tour.title, locale)}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ivory/80">
              {t(tour.tagline, locale)}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ivory/80">
              <span className="flex items-center gap-2">
                <Stars rating={tour.rating} />
                <strong className="text-ivory">{tour.rating.toFixed(2)}</strong>(
                {tour.reviewCount} {dict.tourCard.reviews})
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-gold" aria-hidden />
                {t(tour.duration, locale)}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="size-4 text-gold" aria-hidden />
                {dict.tourDetail.upTo} {tour.groupSize} {dict.tourDetail.people}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Body: story + sticky booking ——— */}
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0">
          {/* The story */}
          <Reveal>
            <h2 className="eyebrow mb-6">{dict.tourDetail.overview}</h2>
            <div className="prose-editorial">
              {tour.story.map((paragraph, i) => (
                <p key={i}>{t(paragraph, locale)}</p>
              ))}
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal className="mt-14">
            <h2 className="eyebrow mb-6">{dict.tourDetail.highlights}</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {tour.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border border-sand bg-white px-5 py-4 shadow-soft"
                >
                  <StarGlyph className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span className="font-medium text-ink/85">{t(h, locale)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Gallery */}
          <Reveal className="mt-14">
            <h2 className="eyebrow mb-6">{dict.tourDetail.gallery}</h2>
            <div className="grid grid-cols-2 gap-4">
              {tour.gallery.map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-[1.25rem] shadow-soft ${
                    i === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Itinerary */}
          <Reveal className="mt-14">
            <h2 className="eyebrow mb-8">{dict.tourDetail.itinerary}</h2>
            <ol className="relative space-y-8 border-s-2 border-gold/30 ps-8">
              {tour.itinerary.map((stop, i) => (
                <li key={i} className="relative">
                  <span
                    className="absolute -start-[41px] top-1 grid size-5 place-items-center rounded-full border-2 border-gold bg-ivory"
                    aria-hidden
                  >
                    <span className="size-1.5 rounded-full bg-gold" />
                  </span>
                  <p className="text-xs font-bold tracking-widest text-brand uppercase">
                    {stop.time}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl text-ink">
                    {t(stop.title, locale)}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/65">
                    {t(stop.description, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Scholar note */}
          <Reveal className="mt-14">
            <figure className="pattern-star-light relative overflow-hidden rounded-[1.5rem] bg-forest p-10 text-ivory shadow-card">
              <p className="eyebrow mb-5">{dict.tourDetail.scholarNote}</p>
              <blockquote className="font-display text-2xl leading-relaxed text-balance">
                &ldquo;{t(tour.scholarNote.quote, locale)}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-ivory/70">
                <strong className="text-gold-soft">
                  {t(tour.scholarNote.scholar, locale)}
                </strong>{" "}
                · {t(tour.scholarNote.role, locale)}
              </figcaption>
            </figure>
          </Reveal>

          {/* Included / not included */}
          <Reveal className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-sand bg-white p-7 shadow-soft">
              <h2 className="mb-5 font-display text-xl text-ink">
                {dict.tourDetail.included}
              </h2>
              <ul className="space-y-3">
                {tour.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink/75">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                    {t(item, locale)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.25rem] border border-sand bg-white p-7 shadow-soft">
              <h2 className="mb-5 font-display text-xl text-ink">
                {dict.tourDetail.notIncluded}
              </h2>
              <ul className="space-y-3">
                {tour.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink/60">
                    <X className="mt-0.5 size-4 shrink-0 text-ink/30" aria-hidden />
                    {t(item, locale)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Reviews */}
          {tourReviews.length > 0 && (
            <Reveal className="mt-14">
              <h2 className="eyebrow mb-6">{dict.tourDetail.reviewsTitle}</h2>
              <div className="grid gap-6">
                {tourReviews.map((r, i) => (
                  <ReviewCard key={i} review={r} locale={locale} />
                ))}
              </div>
            </Reveal>
          )}

          {/* Tour FAQs */}
          <Reveal className="mt-14">
            <h2 className="eyebrow mb-4">{dict.tourDetail.faqTitle}</h2>
            <Accordion
              items={tour.faqs.map((f) => ({
                q: t(f.q, locale),
                a: t(f.a, locale),
              }))}
            />
          </Reveal>
        </div>

        {/* ——— Sticky booking widget ——— */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <div className="overflow-hidden rounded-[1.5rem] border border-sand bg-white shadow-lift">
              <div className="border-b border-sand bg-sand/30 px-7 py-6">
                <p className="text-sm text-ink/55">{dict.tourDetail.from}</p>
                <p className="font-display text-4xl text-forest">
                  ${tour.price}
                  <span className="ms-2 text-sm font-sans font-medium text-ink/50">
                    {dict.tourDetail.perPerson}
                  </span>
                </p>
              </div>
              <div className="space-y-4 px-7 py-6">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start gap-3 text-sm">
                    <f.icon className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                    <div>
                      <p className="font-semibold text-ink">{f.label}</p>
                      <p className="text-ink/60">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 px-7 pb-7">
                <Button
                  href={p(`/book?tour=${tour.slug}`)}
                  size="lg"
                  className="w-full"
                >
                  {dict.tourDetail.book}
                </Button>
                <Button
                  href="https://wa.me/905551234567"
                  variant="outline"
                  className="w-full"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  {dict.tourDetail.whatsapp}
                </Button>
              </div>
              <ul className="space-y-2.5 border-t border-sand bg-sand/20 px-7 py-5 text-xs text-ink/65">
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-brand" aria-hidden />
                  {dict.tourDetail.freeCancel}
                </li>
                <li className="flex items-center gap-2.5">
                  <CalendarCheck className="size-4 text-brand" aria-hidden />
                  {dict.tourDetail.instantConfirm}
                </li>
                <li className="flex items-center gap-2.5">
                  <Footprints className="size-4 text-brand" aria-hidden />
                  {dict.tourDetail.smallGroups}
                </li>
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>

      {/* ——— Related journeys ——— */}
      {related.length > 0 && (
        <section className="bg-sand/40 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-center font-display text-3xl text-ink sm:text-4xl">
                {dict.tourDetail.related}
              </h2>
              <OrnamentRule className="mt-6" />
            </Reveal>
            <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
              {related.map((rt) => (
                <StaggerItem key={rt.slug} className="h-full">
                  <TourCard tour={rt} locale={locale} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
