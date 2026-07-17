import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Landmark,
  Heart,
  Compass,
  Sparkles,
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";
import { isLocale, getDict, t, type Locale } from "@/i18n";
import { destinations, getDestination } from "@/data/destinations";
import { toursByCity } from "@/data/tours";
import { PageHero } from "@/components/layout/PageHero";
import { TourCard } from "@/components/cards/TourCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { OrnamentRule } from "@/components/decor/Ornament";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const destination = getDestination(slug);
  if (!destination) return {};
  return {
    title: t(destination.name, locale),
    description: t(destination.summary, locale),
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);
  const destination = getDestination(slug);
  if (!destination) notFound();

  const cityTours = toursByCity(destination.slug);

  const sections = [
    {
      icon: Landmark,
      title: dict.destinationDetail.significance,
      text: t(destination.significance, locale),
    },
    {
      icon: Heart,
      title: dict.destinationDetail.spiritual,
      text: t(destination.spiritual, locale),
    },
    {
      icon: Compass,
      title: dict.destinationDetail.why,
      text: t(destination.why, locale),
    },
    {
      icon: Sparkles,
      title: dict.destinationDetail.experience,
      text: t(destination.experience, locale),
    },
  ];

  const practical = [
    {
      icon: CalendarDays,
      label: dict.destinationDetail.bestSeason,
      value: t(destination.bestSeason, locale),
    },
    {
      icon: Clock,
      label: dict.destinationDetail.stay,
      value: t(destination.stay, locale),
    },
    {
      icon: MapPin,
      label: dict.destinationDetail.sites,
      value: String(destination.siteCount),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t(destination.epithet, locale)}
        title={t(destination.name, locale)}
        lead={t(destination.summary, locale)}
        image={destination.image}
      />

      {/* Practical strip */}
      <section className="border-b border-sand bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
          {practical.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                <item.icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold tracking-wide text-ink/45 uppercase">
                  {item.label}
                </p>
                <p className="font-semibold text-ink">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial sections */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="space-y-14">
          {sections.map((s, i) => (
            <Reveal key={i}>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-gold/15 text-gold">
                  <s.icon className="size-4" aria-hidden />
                </span>
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  {s.title}
                </h2>
              </div>
              <p className="mt-5 text-lg leading-loose text-ink/75">{s.text}</p>
            </Reveal>
          ))}
        </div>
        <OrnamentRule className="mt-16" />
      </section>

      {/* Journeys in this city */}
      {cityTours.length > 0 && (
        <section className="bg-sand/40 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-center font-display text-3xl text-ink sm:text-4xl">
                {dict.destinationDetail.journeys} {t(destination.name, locale)}
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
              {cityTours.map((tour) => (
                <StaggerItem key={tour.slug} className="h-full">
                  <TourCard tour={tour} locale={locale} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
