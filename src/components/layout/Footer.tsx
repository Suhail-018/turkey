import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { getDict, type Locale } from "@/i18n";
import { Skyline } from "@/components/decor/Skyline";
import { StarGlyph } from "@/components/decor/Ornament";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const p = (path: string) => `/${locale}${path}`;

  const columns: { title: string; links: { href: string; label: string }[] }[] =
    [
      {
        title: dict.footer.columns.journeys,
        links: [
          { href: p("/tours"), label: dict.footer.links.allTours },
          { href: p("/tours?theme=family"), label: dict.footer.links.familyTours },
          { href: p("/contact"), label: dict.footer.links.privateTours },
          { href: p("/contact"), label: dict.footer.links.groupTours },
        ],
      },
      {
        title: dict.footer.columns.company,
        links: [
          { href: p("/about"), label: dict.footer.links.about },
          { href: p("/about#team"), label: dict.footer.links.guides },
          { href: p("/reviews"), label: dict.footer.links.reviews },
          { href: p("/contact"), label: dict.footer.links.contact },
        ],
      },
      {
        title: dict.footer.columns.resources,
        links: [
          { href: p("/heritage"), label: dict.footer.links.library },
          { href: p("/heritage"), label: dict.footer.links.articles },
          { href: p("/destinations"), label: dict.nav.destinations },
        ],
      },
      {
        title: dict.footer.columns.support,
        links: [
          { href: p("/faq"), label: dict.footer.links.faqs },
          { href: p("/book"), label: dict.footer.links.booking },
          {
            href: "https://wa.me/905551234567",
            label: dict.footer.links.whatsapp,
          },
        ],
      },
    ];

  return (
    <footer className="relative bg-night text-ivory">
      {/* Skyline transition */}
      <div className="bg-ivory">
        <Skyline className="block h-16 w-full text-night sm:h-24" />
      </div>

      <div className="pattern-star-light absolute inset-0 opacity-[0.04]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 pt-4 pb-10 sm:px-8">
        {/* Newsletter */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-3">{dict.newsletter.eyebrow}</p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              {dict.newsletter.title}
            </h2>
            <p className="mt-3 max-w-md text-ivory/60">{dict.newsletter.lead}</p>
          </div>
          <NewsletterForm locale={locale} />
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2">
            <Link href={p("")} className="flex items-center gap-2.5">
              <StarGlyph className="size-6 text-gold" />
              <span className="font-display text-2xl">{dict.brand.name}</span>
              <span className="text-sm text-ivory/50">
                {dict.brand.nameArabic}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
              {dict.footer.about}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ivory/70">
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-gold" aria-hidden />
                {dict.contactPage.officeAddress}
              </li>
              <li>
                <a
                  href="https://wa.me/905551234567"
                  className="flex items-center gap-2.5 hover:text-gold-soft"
                >
                  <MessageCircle className="size-4 text-gold" aria-hidden />
                  +90 555 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:salam@miras.travel"
                  className="flex items-center gap-2.5 hover:text-gold-soft"
                >
                  <Mail className="size-4 text-gold" aria-hidden />
                  salam@miras.travel
                </a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-4 text-sm font-bold tracking-wide text-gold-soft">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Prayer line + legal */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-display text-lg text-gold-soft/90">
            {dict.footer.prayer}
          </p>
          <p className="mt-4 text-xs text-ivory/40">
            © {new Date().getFullYear()} {dict.brand.name} ·{" "}
            {dict.footer.rights} · {dict.footer.credits}
          </p>
        </div>
      </div>
    </footer>
  );
}
