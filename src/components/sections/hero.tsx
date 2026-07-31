import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { HeroEntrance, SubtleFloat } from "@/components/ui/motion";
import { personalInfo } from "@/data/personal-info";
import { featuredSkills } from "@/data/skills";
import { hasPublishedResume, resumePath } from "@/lib/resume";
import { getLocalizedText } from "@/utils/localized-content";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 14 0M13 6l6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

export function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const resumeAvailable = hasPublishedResume();
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-grid relative flex min-h-[100svh] scroll-mt-18 items-center overflow-hidden pt-18">
      <div aria-hidden="true" className="hero-glow" />
      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16 lg:py-24">
        <HeroEntrance className="max-w-3xl">
          <p className="eyebrow">{getLocalizedText(personalInfo.professionalTitle, locale)}</p>
          <h1 id="hero-title" className="mt-5 text-[clamp(2.6rem,9vw,4.75rem)] leading-[1.05]">
            {t("greeting")}
            <span className="mt-1 block bg-gradient-to-r from-primary via-primary-hover to-accent-bright bg-clip-text text-transparent">
              {personalInfo.name}.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {getLocalizedText(personalInfo.heroDescription, locale)}
          </p>

          <ul aria-label={t("technologiesLabel")} className="mt-7 flex flex-wrap gap-2">
            {featuredSkills.map((technology) => (
              <li key={technology} className="rounded-full border border-border bg-[var(--overlay)] px-3.5 py-1.5 text-xs font-semibold text-muted backdrop-blur-sm">
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projetos" className={buttonStyles("primary", "w-full sm:w-auto sm:min-h-12 sm:px-5")}>
              {t("projectsButton")}
              <ArrowIcon />
            </a>
            {resumeAvailable ? (
              <a
                href={resumePath}
                download
                className={buttonStyles("secondary", "w-full sm:w-auto sm:min-h-12 sm:px-5")}
              >
                <DownloadIcon />
                {t("resumeButton")}
              </a>
            ) : (
              <span
                aria-disabled="true"
                title={t("resumeUnavailable")}
                className={buttonStyles("secondary", "w-full cursor-not-allowed opacity-55 sm:w-auto sm:min-h-12 sm:px-5")}
              >
                <DownloadIcon />
                {t("resumeUnavailable")}
              </span>
            )}
            <a href="#contato" className={buttonStyles("ghost", "w-full sm:w-auto sm:min-h-12 sm:px-5")}>
              {t("contactButton")}
            </a>
          </div>
        </HeroEntrance>

        <SubtleFloat className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex">
          <div aria-hidden="true" className="contents">
            <div className="hero-orbit hero-orbit-outer" />
            <div className="hero-orbit hero-orbit-inner" />
            <div className="hero-monogram">{personalInfo.monogram}</div>
            <span className="hero-node left-[8%] top-[28%]" />
            <span className="hero-node bottom-[17%] right-[18%]" />
            <span className="hero-node right-[4%] top-[38%]" />
          </div>
        </SubtleFloat>
      </Container>
    </section>
  );
}
