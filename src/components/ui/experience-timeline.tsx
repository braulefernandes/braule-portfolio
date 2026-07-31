"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import type { Experience } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const locale = useLocale();
  return (
    <ol className="relative mt-10 space-y-6 before:absolute before:inset-y-3 before:left-[0.4375rem] before:w-px before:bg-border sm:before:left-[8.5rem]">
      {items.map((experience, index) => {
        return (
        <motion.li
          key={experience.id}
          className="relative grid gap-3 pl-9 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:pl-0"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: Math.min(index * 0.08, 0.24) }}
        >
          <span aria-hidden="true" className="absolute left-0 top-2 size-3.5 rounded-full border-[3px] border-background bg-primary shadow-[0_0_0_4px_var(--glow-primary)] sm:left-[8.0625rem]" />

          <div className="text-sm font-semibold text-muted sm:pt-1 sm:text-right">
            {experience.period ? <p>{getLocalizedText(experience.period, locale)}</p> : null}
            {experience.type ? <p className="mt-1 text-xs font-medium text-primary">{getLocalizedText(experience.type, locale)}</p> : null}
          </div>

          <article className="rounded-2xl border border-border bg-surface p-5 transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_14px_42px_var(--shadow)] sm:p-6">
            <p className="text-sm font-semibold text-primary">{getLocalizedText(experience.organization, locale)}</p>
            <h3 className="mt-1 text-lg sm:text-xl">{getLocalizedText(experience.role, locale)}</h3>
            {experience.location ? <p className="mt-2 text-xs font-medium text-muted">{getLocalizedText(experience.location, locale)}</p> : null}
            <p className="mt-4 text-sm leading-7 text-muted">{getLocalizedText(experience.description, locale)}</p>
          </article>
        </motion.li>
        );
      })}
    </ol>
  );
}
