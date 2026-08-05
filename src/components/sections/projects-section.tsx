import { useTranslations } from "next-intl";

import { ProjectsBackground } from "@/components/decorations/projects-background";
import { Container } from "@/components/layout/container";
import { SectionAnchor } from "@/components/layout/section";
import { ProjectCard } from "@/components/ui/project-card";
import { RevealGrid, RevealItem } from "@/components/ui/motion";
import { SectionTitle } from "@/components/ui/section-title";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const inProgress = projects.filter((project) => project.status === "WIP");
  const completed = projects.filter((project) => project.status === "DONE");

  return (
    <section aria-labelledby="projects-title" className="projects-section relative isolate overflow-hidden border-t border-border py-16 sm:py-24">
      <ProjectsBackground />
      <Container className="projects-content relative z-10">
        <SectionAnchor id="projetos" />
        <RevealGrid>
          <RevealItem>
            <SectionTitle eyebrow={t("eyebrow")} title={t("title")} description={t("description")} id="projects-title" />
          </RevealItem>

          <RevealItem><h3 className="projects-group-title mt-10">{t("inProgressGroup")}</h3></RevealItem>
          <div className="mt-4 grid items-stretch gap-5 md:grid-cols-2">
            {inProgress.map((project) => <RevealItem key={project.id} className="h-full"><ProjectCard project={project} variant="featured" /></RevealItem>)}
          </div>
          <RevealItem><h3 className="projects-group-title mt-9">{t("completedGroup")}</h3></RevealItem>
          <div className="mt-4 grid items-stretch gap-4 md:grid-cols-2">
            {completed.map((project) => <RevealItem key={project.id} className="h-full"><ProjectCard project={project} variant="compact" /></RevealItem>)}
          </div>
        </RevealGrid>
      </Container>
    </section>
  );
}
