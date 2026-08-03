import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { InfoCard } from "@/components/ui/info-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal, RevealGrid, RevealItem } from "@/components/ui/motion";
import { education } from "@/data/education";
import { personalInfo } from "@/data/personal-info";
import { getLocalizedText, toPortfolioLocale } from "@/utils/localized-content";

const highlightKeys = ["location", "availability", "education", "graduation"] as const;

export function AboutSection() {
  const t = useTranslations("About");
  const locale = useLocale();
  const portfolioLocale = toPortfolioLocale(locale);
  const highlights = {
    location: getLocalizedText(personalInfo.location.display, locale),
    availability: getLocalizedText(personalInfo.availability, locale),
    education: `${getLocalizedText(education.degree, locale)} — ${education.institutionAcronym}`,
    graduation: `${t("highlights.graduationPrefix")}: ${education.expectedGraduation}`,
  };
  return (
    <Section id="sobre" aria-labelledby="about-title" className="scroll-mt-18 border-t border-border bg-background-secondary">
      <SectionTitle eyebrow={t("eyebrow")} title={getLocalizedText(personalInfo.aboutTitle, locale)} id="about-title" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-14">
        <Reveal className="space-y-5 text-base leading-8 text-muted sm:text-lg">
          {personalInfo.aboutParagraphs[portfolioLocale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="border-l-2 border-primary pl-5 text-sm leading-7 text-foreground">
            {getLocalizedText(personalInfo.complementaryEducation, locale)}
          </p>
        </Reveal>

        <RevealGrid className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {highlightKeys.map((key) => (
            <RevealItem key={key}>
              <InfoCard label={t(`highlights.${key}Label`)} active={key === "availability"}>{highlights[key]}</InfoCard>
            </RevealItem>
          ))}
        </RevealGrid>
      </div>
    </Section>
  );
}
