import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, getDict, t, type Locale } from "@/i18n";
import { tours, tourCategories } from "@/data/tours";
import { PageHero } from "@/components/layout/PageHero";
import { TourCard } from "@/components/cards/TourCard";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.tours };
}

export default async function ToursPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ theme?: string; city?: string; duration?: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);
  const { theme, city, duration } = await searchParams;

  const filtered = tours.filter((tour) => {
    if (theme && theme !== "all" && tour.category !== theme) return false;
    if (city && tour.city !== city) return false;
    if (duration === "half" && tour.durationDays !== 0.5) return false;
    if (duration === "full" && tour.durationDays !== 1) return false;
    if (duration === "multi" && tour.durationDays < 2) return false;
    return true;
  });

  const filterHref = (id: string) => {
    const sp = new URLSearchParams();
    if (id !== "all") sp.set("theme", id);
    if (city) sp.set("city", city);
    if (duration) sp.set("duration", duration);
    const qs = sp.toString();
    return `/${locale}/tours${qs ? `?${qs}` : ""}`;
  };

  return (
    <>
      <PageHero
        eyebrow={dict.toursPage.eyebrow}
        title={dict.toursPage.title}
        lead={dict.toursPage.lead}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {/* Theme filter pills */}
        <Reveal className="flex flex-wrap gap-2">
          {tourCategories.map((c) => {
            const active =
              c.id === (theme ?? "all") || (c.id === "all" && !theme);
            return (
              <Link
                key={c.id}
                href={filterHref(c.id)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold transition-all",
                  active
                    ? "border-brand bg-brand text-white shadow-card"
                    : "border-sand bg-white text-ink/70 hover:border-brand hover:text-brand"
                )}
                aria-current={active ? "true" : undefined}
              >
                {t(c.label, locale)}
              </Link>
            );
          })}
        </Reveal>

        <p className="mt-8 text-sm font-medium text-ink/50">
          {filtered.length} {dict.toursPage.results}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[1.5rem] border border-sand bg-white p-12 text-center">
            <p className="mx-auto max-w-md text-lg text-ink/70">
              {dict.toursPage.noResults}
            </p>
            <Button href={`/${locale}/contact`} className="mt-6">
              {dict.nav.contact}
            </Button>
          </div>
        ) : (
          <Stagger className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
            {filtered.map((tour) => (
              <StaggerItem key={tour.slug} className="h-full">
                <TourCard tour={tour} locale={locale} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>
    </>
  );
}
