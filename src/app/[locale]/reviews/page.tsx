import type { Metadata } from "next";
import { isLocale, getDict, type Locale } from "@/i18n";
import { reviews } from "@/data/guides";
import { img } from "@/data/images";
import { PageHero } from "@/components/layout/PageHero";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.reviews };
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);

  const stats = [
    { value: 4.96, decimals: 2, suffix: "", label: dict.reviewsPage.average },
    { value: 1400, decimals: 0, suffix: "+", label: dict.reviewsPage.journeys },
    { value: 46, decimals: 0, suffix: "", label: dict.reviewsPage.countries },
    { value: 99, decimals: 0, suffix: "%", label: dict.reviewsPage.wouldRecommend },
  ];

  return (
    <>
      <PageHero
        eyebrow={dict.reviewsPage.eyebrow}
        title={dict.reviewsPage.title}
        lead={dict.reviewsPage.lead}
        image={img.mosqueCourtyard}
      />

      <section className="border-b border-sand bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-4xl text-forest sm:text-5xl">
                <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {reviews.map((r, i) => (
            <StaggerItem key={i} className="h-full">
              <ReviewCard review={r} locale={locale} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
