import type { Metadata } from "next";
import { isLocale, getDict, type Locale } from "@/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { BookingFlow } from "@/components/forms/BookingFlow";
import { Reveal } from "@/components/motion/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.bookNow };
}

export default async function BookPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tour?: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);
  const { tour } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow={dict.booking.eyebrow}
        title={dict.booking.title}
        lead={dict.booking.lead}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Reveal>
          <BookingFlow locale={locale} initialTour={tour} />
        </Reveal>
      </section>
    </>
  );
}
