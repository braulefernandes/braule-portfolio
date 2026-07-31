import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { SectionTitle } from "@/components/ui/section-title";
import { getExperiencesByKind } from "@/data/experiences";

const professionalExperiences = getExperiencesByKind("professional");
const academicExperiences = getExperiencesByKind("academic");

export function ExperienceSection() {
  const t = useTranslations("Experience");
  return (
    <>
      <Section id="experiencia" aria-labelledby="experience-title" className="scroll-mt-18 border-t border-border bg-background">
        <SectionTitle eyebrow={t("professionalEyebrow")} title={t("professionalTitle")} id="experience-title" />
        <ExperienceTimeline items={professionalExperiences} />
      </Section>

      <Section id="atividades-academicas" aria-labelledby="academic-title" className="scroll-mt-18 border-t border-border bg-background-secondary">
        <SectionTitle eyebrow={t("academicEyebrow")} title={t("academicTitle")} id="academic-title" />
        <ExperienceTimeline items={academicExperiences} />
      </Section>
    </>
  );
}
