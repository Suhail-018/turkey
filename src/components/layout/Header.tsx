"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { getDict, t, type Locale } from "@/i18n";
import { featuredTours, tourCategories } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { StarGlyph } from "@/components/decor/Ornament";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const p = (path: string) => `/${locale}${path}`;
  const otherLocale = locale === "en" ? "ar" : "en";
  const switchHref =
    pathname?.replace(/^\/(en|ar)/, `/${otherLocale}`) ?? `/${otherLocale}`;

  const links = [
    { href: p("/destinations"), label: dict.nav.destinations },
    { href: p("/heritage"), label: dict.nav.heritage },
    { href: p("/reviews"), label: dict.nav.reviews },
    { href: p("/about"), label: dict.nav.about },
    { href: p("/contact"), label: dict.nav.contact },
  ];

  const solid = scrolled || open;
  const featured = featuredTours[0];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/90 shadow-soft backdrop-blur-md"
          : "bg-gradient-to-b from-night/60 to-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        {/* Brand */}
        <Link
          href={p("")}
          className={cn(
            "flex items-center gap-2.5",
            solid ? "text-ink" : "text-ivory"
          )}
          aria-label={dict.brand.name}
        >
          <StarGlyph className="size-6 text-gold" />
          <span className="font-display text-2xl tracking-wide">
            {dict.brand.name}
          </span>
          <span
            className={cn(
              "hidden text-sm sm:block",
              solid ? "text-ink/50" : "text-ivory/60"
            )}
          >
            {dict.brand.nameArabic}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className={cn(
            "hidden items-center gap-1 text-sm font-semibold lg:flex",
            solid ? "text-ink/80" : "text-ivory/90"
          )}
          aria-label="Primary"
        >
          {/* Tours mega menu */}
          <div className="group relative">
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 transition-colors",
                solid ? "hover:text-brand" : "hover:text-white"
              )}
              aria-haspopup="true"
            >
              {dict.nav.tours}
              <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute start-1/2 top-full w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 rtl:translate-x-1/2">
              <div className="grid grid-cols-[1.1fr_1fr] gap-6 rounded-[1.75rem] border border-sand bg-ivory p-6 text-ink shadow-lift">
                <div>
                  <p className="eyebrow mb-3 text-xs">{dict.megamenu.byTheme}</p>
                  <ul className="grid grid-cols-2 gap-x-4">
                    {tourCategories
                      .filter((c) => c.id !== "all")
                      .map((c) => (
                        <li key={c.id}>
                          <Link
                            href={p(`/tours?theme=${c.id}`)}
                            className="block rounded-lg px-2 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-brand/5 hover:text-brand"
                          >
                            {t(c.label, locale)}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Link
                    href={p("/tours")}
                    className="mt-3 inline-flex items-center gap-1.5 px-2 text-sm font-semibold text-brand hover:underline"
                  >
                    {dict.megamenu.viewAll}
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </Link>
                </div>
                {featured && (
                  <Link
                    href={p(`/tours/${featured.slug}`)}
                    className="group/card relative overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={featured.image}
                      alt=""
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
                    <div className="relative flex h-full min-h-44 flex-col justify-end p-4 text-ivory">
                      <p className="eyebrow mb-1 text-[10px]">
                        {dict.megamenu.featured}
                      </p>
                      <p className="font-display text-lg leading-snug">
                        {t(featured.title, locale)}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-4 py-2 transition-colors",
                solid ? "hover:text-brand" : "hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors",
              solid
                ? "border-ink/15 text-ink/80 hover:border-brand hover:text-brand"
                : "border-white/30 text-ivory hover:bg-white/10"
            )}
            lang={otherLocale}
          >
            {dict.nav.language}
          </Link>
          <Button
            href={p("/book")}
            size="sm"
            variant={solid ? "primary" : "gold"}
            className="hidden sm:inline-flex"
          >
            {dict.nav.bookNow}
          </Button>
          <button
            className={cn(
              "grid size-10 place-items-center rounded-full lg:hidden",
              solid ? "text-ink" : "text-ivory"
            )}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-t border-sand bg-ivory lg:hidden"
          >
            <nav
              className="flex max-h-[calc(100vh-4.5rem)] flex-col gap-1 overflow-y-auto px-5 py-6"
              aria-label="Mobile"
            >
              <Link
                href={p("/tours")}
                className="rounded-xl px-4 py-3 text-lg font-semibold text-ink hover:bg-brand/5"
              >
                {dict.nav.tours}
              </Link>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-3 text-lg font-semibold text-ink hover:bg-brand/5"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 grid gap-3 border-t border-sand pt-5">
                <Button href={p("/book")} size="lg">
                  {dict.nav.bookNow}
                </Button>
                <p className="text-center text-xs text-ink/50">
                  {destinations.length} {dict.nav.destinations} ·{" "}
                  {dict.brand.tagline}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
