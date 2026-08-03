import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { buttonStyles } from "@/components/ui/button";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { InteractiveGlow } from "@/components/ui/interactive-glow";
import { SectionTitle } from "@/components/ui/section-title";
import { getExperiencesByKind } from "@/data/experiences";
import { hasPublishedResume, resumePath } from "@/lib/resume";

const professionalExperiences = getExperiencesByKind("professional");
const academicExperiences = getExperiencesByKind("academic");

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const resumeAvailable = hasPublishedResume();
  return (
    <>
      <Section id="experiencia" aria-labelledby="experience-title" className="scroll-mt-18 border-t border-border bg-background">
        <SectionTitle eyebrow={t("professionalEyebrow")} title={t("professionalTitle")} id="experience-title" />
        <ExperienceTimeline items={professionalExperiences} />
        <aside
          aria-labelledby="resume-title"
          className="interactive-surface mt-10 flex flex-col gap-6 rounded-2xl border border-border bg-surface p-5 transition-[background-color,border-color,box-shadow] sm:p-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <InteractiveGlow />
          <div className="max-w-2xl">
            <h3 id="resume-title" className="text-lg sm:text-xl">{t("resumeTitle")}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{t("resumeDescription")}</p>
          </div>
          {resumeAvailable ? (
            <a
              href={resumePath}
              download="Braule-Fernandes-Curriculo.pdf"
              className={buttonStyles("primary", "w-full shrink-0 sm:w-auto sm:min-h-12 sm:px-5")}
            >
              <DownloadIcon />
              {t("resumeButton")}
            </a>
          ) : (
            <span
              aria-disabled="true"
              title={t("resumeUnavailable")}
              className={buttonStyles("secondary", "w-full shrink-0 cursor-not-allowed opacity-55 sm:w-auto sm:min-h-12 sm:px-5")}
            >
              <DownloadIcon />
              {t("resumeUnavailable")}
            </span>
          )}
        </aside>
      </Section>

      <Section id="atividades-academicas" aria-labelledby="academic-title" className="scroll-mt-18 border-t border-border bg-background-secondary">
        <SectionTitle eyebrow={t("academicEyebrow")} title={t("academicTitle")} id="academic-title" />
        <ExperienceTimeline items={academicExperiences} />
      </Section>
    </>
  );
}
