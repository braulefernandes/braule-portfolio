import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/motion";
import { InteractiveGlow } from "@/components/ui/interactive-glow";
import { education } from "@/data/education";
import { getLocalizedText } from "@/utils/localized-content";

export function EducationSection() {
  const t = useTranslations("Education");
  const locale = useLocale();
  return (
    <Section id="formacao" aria-labelledby="education-title" className="scroll-mt-18 border-t border-border bg-background">
      <SectionTitle eyebrow={t("eyebrow")} title={t("title")} id="education-title" />

      <Reveal className="mt-10">
      <article className="interactive-surface group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-[border-color,box-shadow] hover:border-primary sm:p-8">
        <InteractiveGlow />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-accent-bright" />
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-sm font-semibold text-primary">{getLocalizedText(education.institution, locale)}</p>
            <h3 className="mt-2 text-xl sm:text-2xl">{getLocalizedText(education.degree, locale)}</h3>
            <p className="mt-3 text-sm text-muted">{getLocalizedText(education.location, locale)}</p>
          </div>
          <p className="w-fit rounded-full border border-border bg-background-secondary px-4 py-2 text-sm font-semibold text-foreground">
            {education.startYear} — {education.expectedGraduation}
          </p>
        </div>
      </article>
      </Reveal>
    </Section>
  );
}
