import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/ui/project-card";
import { RevealGrid, RevealItem } from "@/components/ui/motion";
import { SectionTitle } from "@/components/ui/section-title";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const t = useTranslations("Projects");
  return (
    <Section id="projetos" aria-labelledby="projects-title" className="scroll-mt-18 border-t border-border bg-background-secondary">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        id="projects-title"
      />

      <RevealGrid className="mt-10 grid items-stretch gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <RevealItem key={project.id} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGrid>
    </Section>
  );
}
