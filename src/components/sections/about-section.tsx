import { useLocale, useTranslations } from "next-intl";

import { AboutBackground } from "@/components/decorations/about-background";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/motion";
import { personalInfo } from "@/data/personal-info";
import { getLocalizedText, toPortfolioLocale } from "@/utils/localized-content";
import { AboutHighlights } from "./about-highlights";

export function AboutSection() {
  const t = useTranslations("About");
  const locale = useLocale();
  const portfolioLocale = toPortfolioLocale(locale);
  return (
    <section id="sobre" aria-labelledby="about-title" className="about-section relative scroll-mt-18 overflow-hidden border-t border-border py-16 lg:py-20 xl:py-15">
      <AboutBackground />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 max-w-3xl">
            <Reveal>
              <p className="eyebrow">{t("eyebrow")}</p>
              <h2 id="about-title" className="mt-3 text-3xl leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
                {getLocalizedText(personalInfo.aboutTitle, locale)}
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-6 space-y-4 text-base leading-8 text-muted sm:text-lg">
              {personalInfo.aboutParagraphs[portfolioLocale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
            <Reveal delay={0.14}>
              <div className="about-callout mt-6">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3h8M9 3v5l-4.5 8a3 3 0 0 0 2.6 4.5h9.8a3 3 0 0 0 2.6-4.5L15 8V3" />
                  <path d="M7 15h10" />
                </svg>
                <p>{getLocalizedText(personalInfo.complementaryEducation, locale)}</p>
              </div>
            </Reveal>
          </div>
          <AboutHighlights />
        </div>
      </Container>
    </section>
  );
}
