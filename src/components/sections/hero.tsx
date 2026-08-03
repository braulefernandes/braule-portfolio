import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { InteractiveBackground } from "@/components/decorations/interactive-background";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { buttonStyles } from "@/components/ui/button";
import { HeroEntrance } from "@/components/ui/motion";
import { personalInfo } from "@/data/personal-info";
import { getLocalizedText } from "@/utils/localized-content";

import { HeroCaricature } from "./hero-caricature";

export function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-grid relative flex min-h-[100svh] scroll-mt-18 items-center overflow-hidden pt-18">
      <InteractiveBackground />
      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-10 lg:pb-5 lg:pt-5 xl:gap-16">
        <HeroEntrance className="max-w-3xl">
          <p className="eyebrow">{getLocalizedText(personalInfo.professionalTitle, locale)}</p>
          <h1 id="hero-title" className="mt-5 text-[clamp(2.6rem,9vw,4.75rem)] leading-[1.05]">
            {t("greeting")}
            <span className="hero-name-gradient mt-1 block">
              {personalInfo.name}.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {getLocalizedText(personalInfo.heroDescription, locale)}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projetos" className={buttonStyles("primary", "chevron-action w-full sm:w-auto sm:min-h-12 sm:px-5")}>
              {t("projectsButton")}
              <ChevronIcon />
            </a>
            <a
              href="#experiencia"
              className={buttonStyles("secondary", "chevron-action w-full sm:w-auto sm:min-h-12 sm:px-5")}
            >
              {t("experienceButton")}
              <ChevronIcon />
            </a>
          </div>
        </HeroEntrance>

        <HeroCaricature alt={t("caricatureAlt")} />
      </Container>
    </section>
  );
}
