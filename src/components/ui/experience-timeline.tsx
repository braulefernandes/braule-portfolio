"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

import type { Experience, ExperienceVisual } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";
import { InteractiveGlow } from "./interactive-glow";

function ExperienceIcon({ visual }: { visual: ExperienceVisual }) {
  const common = { "aria-hidden": true, className: "experience-icon-svg", fill: "none", stroke: "currentColor", strokeWidth: 1.7, viewBox: "0 0 24 24" } as const;
  if (visual === "support") return <svg {...common}><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path className="experience-icon-signal" d="M7 9h2l1.5-2 2.5 5 1.5-3H17"/></svg>;
  if (visual === "administration") return <svg {...common}><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 12h5M10 15h5M10 18h3"/></svg>;
  return <svg {...common}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><circle className="experience-icon-data" cx="8" cy="10" r="1" fill="currentColor" stroke="none"/><circle className="experience-icon-data experience-icon-data-two" cx="12" cy="8" r="1" fill="currentColor" stroke="none"/><circle className="experience-icon-data experience-icon-data-three" cx="16" cy="12" r="1" fill="currentColor" stroke="none"/></svg>;
}

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const locale = useLocale();
  const t = useTranslations("Experience");
  const reduceMotion = useReducedMotion();

  return (
    <div className="experience-journey relative mt-8 lg:mt-10">
      <ol className="experience-timeline">
        {items.map((experience, index) => {
          const period = experience.period ?? experience.type;
          return (
            <motion.li
              key={experience.id}
              className="experience-item"
              data-side={index % 2 === 0 ? "left" : "right"}
              data-current={experience.isCurrent || undefined}
              initial={reduceMotion ? false : { opacity: 0, y: 14, x: index % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: index * 0.08, duration: 0.46 }}
            >
              <motion.span
                aria-hidden="true"
                className="experience-connector"
                initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.08 + 0.12, duration: 0.34 }}
              />
              <motion.span
                aria-hidden="true"
                className="experience-marker"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.08 + 0.08, duration: 0.3 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </motion.span>
              <article className="experience-card interactive-surface">
                <InteractiveGlow />
                <span aria-hidden="true" className="experience-card-energy" />
                <header className="experience-card-header">
                  <div className="experience-icon"><ExperienceIcon visual={experience.visual} /></div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      {period ? <p className="experience-period"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>{getLocalizedText(period, locale)}</p> : null}
                      {experience.isCurrent ? <span className="experience-current-badge"><span aria-hidden="true" />{t("currentBadge")}</span> : null}
                    </div>
                    <p className="experience-organization">{getLocalizedText(experience.organization, locale)}</p>
                  </div>
                </header>
                <h3 className="experience-role">{getLocalizedText(experience.role, locale)}</h3>
                {experience.location ? <p className="experience-location"><span aria-hidden="true">⌖</span>{getLocalizedText(experience.location, locale)}</p> : null}
                <p className="experience-description">{getLocalizedText(experience.description, locale)}</p>
                <span aria-hidden="true" className="experience-card-corner">04 : +</span>
              </article>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
