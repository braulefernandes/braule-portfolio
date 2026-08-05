import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { ExperienceTopographicBackground } from "@/components/decorations/experience-topographic-background";
import { buttonStyles } from "@/components/ui/button";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { InteractiveGlow } from "@/components/ui/interactive-glow";
import { SectionTitle } from "@/components/ui/section-title";
import { experiences } from "@/data/experiences";
import { hasPublishedResume, resumePath } from "@/lib/resume";

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 12h6M9 16h6" />
    </svg>
  );
}

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const resumeAvailable = hasPublishedResume();
  return (
    <Section anchorId="experiencia" aria-labelledby="experience-title" className="experience-section relative isolate overflow-hidden border-t border-border" containerClassName="experience-content relative z-10">
        <ExperienceTopographicBackground />
        <SectionTitle eyebrow={t("professionalEyebrow")} title={t("professionalTitle")} id="experience-title" className="experience-heading" />
        <ExperienceTimeline items={experiences} />
        <div aria-hidden="true" className="resume-divider-wrap">
          <div className="resume-divider">
            <span />
            <ResumeIcon />
            <span />
          </div>
        </div>
        <aside
          aria-labelledby="resume-title"
          className="resume-callout interactive-surface mt-5 flex flex-col gap-5 rounded-2xl border border-border p-5 sm:p-6 lg:mt-6 lg:flex-row lg:items-center lg:gap-6"
        >
          <InteractiveGlow />
          <div className="resume-document-icon"><ResumeIcon /></div>
          <div className="min-w-0 flex-1">
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
  );
}
