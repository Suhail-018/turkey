"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { getDict, type Locale } from "@/i18n";

export function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const f = dict.contactPage.form;
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().min(2, f.errors.name),
    email: z.string().email(f.errors.email),
    phone: z.string().optional(),
    subject: z.enum(["general", "booking", "private", "group"]),
    message: z.string().min(10, f.errors.message),
  });

  type Values = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { subject: "general" },
  });

  const onSubmit = async (_values: Values) => {
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };

  const inputClass =
    "w-full rounded-2xl border border-sand bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";
  const labelClass = "mb-2 block text-sm font-semibold text-ink";
  const errorClass = "mt-1.5 text-xs font-medium text-[#D64545]";

  if (sent) {
    return (
      <div
        className="rounded-[1.5rem] border border-brand/20 bg-brand/5 p-10 text-center"
        role="status"
      >
        <p className="font-display text-2xl text-brand">{f.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            {f.name}
          </label>
          <input id="cf-name" className={inputClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            {f.email}
          </label>
          <input
            id="cf-email"
            type="email"
            className={inputClass}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            {f.phone}
          </label>
          <input
            id="cf-phone"
            type="tel"
            className={inputClass}
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="cf-subject" className={labelClass}>
            {f.subject}
          </label>
          <select id="cf-subject" className={inputClass} {...register("subject")}>
            <option value="general">{f.subjects.general}</option>
            <option value="booking">{f.subjects.booking}</option>
            <option value="private">{f.subjects.private}</option>
            <option value="group">{f.subjects.group}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          {f.message}
        </label>
        <textarea
          id="cf-message"
          rows={5}
          className={inputClass}
          {...register("message")}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift disabled:opacity-60"
      >
        <Send className="size-4 rtl:-scale-x-100" aria-hidden />
        {isSubmitting ? f.sending : f.send}
      </button>
    </form>
  );
}
