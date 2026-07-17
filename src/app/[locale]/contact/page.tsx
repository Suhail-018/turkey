import type { Metadata } from "next";
import { MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { isLocale, getDict, type Locale } from "@/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.contact };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);

  const details = [
    {
      icon: MapPin,
      label: dict.contactPage.office,
      value: dict.contactPage.officeAddress,
    },
    {
      icon: Clock,
      label: dict.contactPage.hoursLabel,
      value: dict.contactPage.hours,
    },
    {
      icon: MessageCircle,
      label: dict.contactPage.whatsappLabel,
      value: "+90 555 123 45 67",
      href: "https://wa.me/905551234567",
    },
    {
      icon: Mail,
      label: dict.contactPage.emailLabel,
      value: "salam@miras.travel",
      href: "mailto:salam@miras.travel",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={dict.contactPage.eyebrow}
        title={dict.contactPage.title}
        lead={dict.contactPage.lead}
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_380px]">
        <Reveal>
          <ContactForm locale={locale} />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-[1.5rem] border border-sand bg-white p-8 shadow-soft">
            <ul className="space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <d.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-ink/45 uppercase">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="font-semibold text-ink hover:text-brand"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-ink">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
