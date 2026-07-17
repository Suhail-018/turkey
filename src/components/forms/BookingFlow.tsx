"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  Plus,
  ShieldCheck,
  CalendarCheck,
  Lock,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { getDict, t, type Locale } from "@/i18n";
import { tours } from "@/data/tours";
import { cn } from "@/lib/utils";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export function BookingFlow({
  locale,
  initialTour,
}: {
  locale: Locale;
  initialTour?: string;
}) {
  const dict = getDict(locale);
  const b = dict.booking;

  const [step, setStep] = useState(0);
  const [tourSlug, setTourSlug] = useState(
    tours.some((x) => x.slug === initialTour) ? (initialTour as string) : ""
  );
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [stepError, setStepError] = useState("");
  const [done, setDone] = useState(false);

  const tour = tours.find((x) => x.slug === tourSlug);
  const total = tour ? adults * tour.price + children * (tour.price / 2) : 0;

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, b.errors.name),
        email: z.string().email(b.errors.email),
        phone: z.string().min(6, b.errors.phone),
        notes: z.string().optional(),
      }),
    [b]
  );

  type Contact = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Contact>({ resolver: zodResolver(contactSchema) });

  const steps = [b.steps.journey, b.steps.date, b.steps.travelers, b.steps.contact];
  const today = new Date().toISOString().split("T")[0];

  const next = () => {
    if (step === 0 && !tourSlug) return setStepError(b.errors.journey);
    if (step === 1 && (!date || date < today)) return setStepError(b.errors.date);
    setStepError("");
    setStep((s) => Math.min(s + 1, 3));
  };

  const submit = async (_values: Contact) => {
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
  };

  const inputClass =
    "w-full rounded-2xl border border-sand bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";
  const labelClass = "mb-2 block text-sm font-semibold text-ink";
  const errorClass = "mt-1.5 text-xs font-medium text-[#D64545]";

  if (done) {
    return (
      <div className="mx-auto max-w-xl rounded-[1.75rem] border border-brand/20 bg-white p-12 text-center shadow-card">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand/10 text-brand">
          <Check className="size-8" aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-3xl text-ink">{b.success.title}</h2>
        <p className="mt-4 leading-relaxed text-ink/65">{b.success.text}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep"
        >
          {b.success.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <div>
        {/* Progress rail */}
        <ol className="flex items-center gap-2" aria-label={`${b.stepLabel} ${step + 1} ${b.of} 4`}>
          {steps.map((label, i) => (
            <li key={label} className="flex flex-1 flex-col gap-2">
              <span
                className={cn(
                  "h-1.5 rounded-full transition-colors duration-500",
                  i <= step ? "bg-brand" : "bg-sand"
                )}
              />
              <span
                className={cn(
                  "text-xs font-semibold",
                  i <= step ? "text-brand" : "text-ink/40"
                )}
              >
                {i + 1}. {label}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-10 min-h-96">
          <AnimatePresence mode="wait">
            {/* Step 1 — journey */}
            {step === 0 && (
              <motion.fieldset
                key="s0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <legend className="font-display text-2xl text-ink">
                  {b.chooseJourney}
                </legend>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {tours.map((x) => {
                    const selected = x.slug === tourSlug;
                    return (
                      <button
                        type="button"
                        key={x.slug}
                        onClick={() => {
                          setTourSlug(x.slug);
                          setStepError("");
                        }}
                        aria-pressed={selected}
                        className={cn(
                          "group relative flex items-center gap-4 rounded-2xl border-2 bg-white p-4 text-start transition-all",
                          selected
                            ? "border-brand shadow-glow"
                            : "border-sand hover:border-brand/40 hover:shadow-card"
                        )}
                      >
                        <span className="relative block size-16 shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={x.image}
                            alt=""
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-bold text-ink">
                            {t(x.title, locale)}
                          </span>
                          <span className="block text-xs text-ink/55">
                            {t(x.duration, locale)}
                          </span>
                          <span className="mt-1 block text-sm font-bold text-forest">
                            ${x.price}{" "}
                            <span className="font-medium text-ink/45">
                              {dict.tourCard.perPerson}
                            </span>
                          </span>
                        </span>
                        {selected && (
                          <span className="absolute end-3 top-3 grid size-5 place-items-center rounded-full bg-brand text-white">
                            <Check className="size-3" aria-hidden />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.fieldset>
            )}

            {/* Step 2 — date */}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h2 className="font-display text-2xl text-ink">{b.chooseDate}</h2>
                <p className="mt-2 text-sm text-ink/55">{b.dateHint}</p>
                <label htmlFor="bk-date" className="sr-only">
                  {b.steps.date}
                </label>
                <input
                  id="bk-date"
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setStepError("");
                  }}
                  className={cn(inputClass, "mt-6 max-w-xs text-base")}
                />
              </motion.div>
            )}

            {/* Step 3 — travelers */}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h2 className="font-display text-2xl text-ink">
                  {b.travelersTitle}
                </h2>
                <div className="mt-6 max-w-md space-y-4">
                  {(
                    [
                      {
                        label: b.adults,
                        hint: b.adultsHint,
                        value: adults,
                        set: setAdults,
                        min: 1,
                      },
                      {
                        label: b.children,
                        hint: b.childrenHint,
                        value: children,
                        set: setChildren,
                        min: 0,
                      },
                    ] as const
                  ).map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-2xl border border-sand bg-white p-5"
                    >
                      <div>
                        <p className="font-semibold text-ink">{row.label}</p>
                        <p className="text-xs text-ink/50">{row.hint}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => row.set(Math.max(row.min, row.value - 1))}
                          className="grid size-9 place-items-center rounded-full border border-sand text-ink/70 transition-colors hover:border-brand hover:text-brand"
                          aria-label={`− ${row.label}`}
                        >
                          <Minus className="size-4" aria-hidden />
                        </button>
                        <span className="w-6 text-center text-lg font-bold text-ink">
                          {row.value}
                        </span>
                        <button
                          type="button"
                          onClick={() => row.set(Math.min(16, row.value + 1))}
                          className="grid size-9 place-items-center rounded-full border border-sand text-ink/70 transition-colors hover:border-brand hover:text-brand"
                          aria-label={`+ ${row.label}`}
                        >
                          <Plus className="size-4" aria-hidden />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4 — contact */}
            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h2 className="font-display text-2xl text-ink">
                  {b.contactTitle}
                </h2>
                <div className="mt-6 grid max-w-xl gap-5">
                  <div>
                    <label htmlFor="bk-name" className={labelClass}>
                      {b.name}
                    </label>
                    <input id="bk-name" className={inputClass} {...register("name")} />
                    {errors.name && (
                      <p className={errorClass}>{errors.name.message}</p>
                    )}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-email" className={labelClass}>
                        {b.email}
                      </label>
                      <input
                        id="bk-email"
                        type="email"
                        className={inputClass}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className={errorClass}>{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="bk-phone" className={labelClass}>
                        {b.phone}
                      </label>
                      <input
                        id="bk-phone"
                        type="tel"
                        className={inputClass}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className={errorClass}>{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bk-notes" className={labelClass}>
                      {b.notes}
                    </label>
                    <textarea
                      id="bk-notes"
                      rows={3}
                      placeholder={b.notesPlaceholder}
                      className={inputClass}
                      {...register("notes")}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {stepError && (
            <p className={cn(errorClass, "mt-4")} role="alert">
              {stepError}
            </p>
          )}
        </div>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between border-t border-sand pt-6">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink/60 transition-colors hover:text-ink",
              step === 0 && "invisible"
            )}
          >
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden />
            {b.back}
          </button>
          {step < 3 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift"
            >
              {b.next}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit(submit)}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift disabled:opacity-60"
            >
              {isSubmitting ? b.submitting : b.submit}
            </button>
          )}
        </div>
      </div>

      {/* ——— Live summary ——— */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="overflow-hidden rounded-[1.5rem] border border-sand bg-white shadow-card">
          {tour ? (
            <div className="relative aspect-[16/9]">
              <Image
                src={tour.image}
                alt=""
                fill
                sizes="360px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
              <p className="absolute bottom-3 start-4 pe-4 font-display text-lg text-ivory">
                {t(tour.title, locale)}
              </p>
            </div>
          ) : (
            <div className="pattern-star flex aspect-[16/9] items-center justify-center bg-sand/40 p-6 text-center text-sm text-ink/50">
              {b.chooseJourney}
            </div>
          )}
          <div className="space-y-3 px-6 py-5 text-sm">
            <p className="text-xs font-bold tracking-wide text-ink/45 uppercase">
              {b.summary}
            </p>
            {date && (
              <div className="flex justify-between">
                <span className="text-ink/55">{b.steps.date}</span>
                <span className="font-semibold text-ink">{date}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-ink/55">{b.adults}</span>
              <span className="font-semibold text-ink">{adults}</span>
            </div>
            {children > 0 && (
              <div className="flex justify-between">
                <span className="text-ink/55">{b.children}</span>
                <span className="font-semibold text-ink">{children}</span>
              </div>
            )}
            {tour && (
              <div className="flex items-baseline justify-between border-t border-sand pt-4">
                <span className="font-semibold text-ink">{b.total}</span>
                <span className="font-display text-2xl text-forest">
                  ${total.toFixed(0)}
                </span>
              </div>
            )}
            <p className="text-xs leading-relaxed text-ink/50">{b.depositNote}</p>
          </div>
          <ul className="space-y-2.5 border-t border-sand bg-sand/20 px-6 py-5 text-xs text-ink/65">
            <li className="flex items-center gap-2.5">
              <ShieldCheck className="size-4 text-brand" aria-hidden />
              {b.trust.cancel}
            </li>
            <li className="flex items-center gap-2.5">
              <CalendarCheck className="size-4 text-brand" aria-hidden />
              {b.trust.confirm}
            </li>
            <li className="flex items-center gap-2.5">
              <Lock className="size-4 text-brand" aria-hidden />
              {b.trust.secure}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
