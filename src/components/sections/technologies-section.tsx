import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { SkillsOrbitBackground } from "@/components/decorations/skills-orbit-background";
import { CoreTechnologyCard } from "@/components/skills/core-technology-card";
import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGrid, RevealItem } from "@/components/ui/motion";
import { coreTechnologies, skillCategories } from "@/data/skills";

export function TechnologiesSection() {
  const t = useTranslations("Technologies");
  return (
    <section id="tecnologias" aria-labelledby="technologies-title" className="skills-section relative isolate scroll-mt-18 overflow-hidden border-t border-border py-16 sm:py-16 lg:py-20 xl:py-24">
      <SkillsOrbitBackground />
      <Container className="relative z-10">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        id="technologies-title"
      />

      <div className="skills-content">
        <RevealItem className="mt-9"><h3 className="skills-group-label">{t("coreTitle")}</h3></RevealItem>
        <RevealGrid role="list" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coreTechnologies.map((technology) => (
            <RevealItem key={technology.id} role="listitem" className="h-full">
              <CoreTechnologyCard technology={technology} />
            </RevealItem>
          ))}
        </RevealGrid>

        <RevealItem className="skills-ecosystem-connector"><span>{t("ecosystemConnector")}</span></RevealItem>
        <RevealItem><h3 className="skills-group-label">{t("ecosystemTitle")}</h3></RevealItem>
        <div className="skill-ecosystem-grid-wrap">
          <svg aria-hidden="true" className="skill-ecosystem-connections" viewBox="0 0 1000 620" preserveAspectRatio="none"><path d="M250 145H500V310H750M250 475H500V310"/><circle cx="500" cy="310" r="5"/><path className="skill-ecosystem-pulse" d="M250 145H500V310H750"/></svg>
          <RevealGrid className="mt-4 grid gap-4 md:grid-cols-2">
            {skillCategories.map((category) => (
              <RevealItem key={category.id} className="h-full"><SkillCategoryCard category={category} /></RevealItem>
            ))}
          </RevealGrid>
        </div>
      </div>
      </Container>
    </section>
  );
}
