import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGrid, RevealItem } from "@/components/ui/motion";
import { TechnologyCard } from "@/components/ui/technology-card";
import { featuredSkills, skillCategories } from "@/data/skills";

export function TechnologiesSection() {
  const t = useTranslations("Technologies");
  return (
    <Section id="tecnologias" aria-labelledby="technologies-title" className="scroll-mt-18 border-t border-border bg-background-secondary">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        id="technologies-title"
      />

      <RevealGrid role="list" className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {featuredSkills.map((technology) => (
          <RevealItem key={technology} role="listitem">
            <div className="rounded-xl border border-border bg-[var(--overlay)] px-3 py-4 text-center text-sm font-bold text-foreground shadow-[0_8px_28px_var(--shadow)] backdrop-blur-sm transition-[border-color,transform] hover:-translate-y-0.5 hover:border-primary">
              {technology}
            </div>
          </RevealItem>
        ))}
      </RevealGrid>

      <RevealGrid className="mt-8 grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <RevealItem key={category.id} className="h-full">
            <TechnologyCard category={category} />
          </RevealItem>
        ))}
      </RevealGrid>
    </Section>
  );
}
