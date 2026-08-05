"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { ExternalLinkIcon } from "@/components/icons/external-link-icon";
import type { Project } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";

import { InteractiveGlow } from "./interactive-glow";
import { ProjectVisual } from "./project-visual";
import { StatusBadge } from "./status-badge";

type ProjectCardVariant = "featured" | "compact";

const prioritizedTechnologies: Record<string, string[]> = {
  "gotrip-ai": ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL"],
  taskflow: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "React"],
  "p2p-search": ["Python", "NetworkX", "Matplotlib", "YAML"],
  "yolov8-cones": ["Python", "YOLOv8", "Roboflow", "Visão computacional"],
};

interface ProjectCardProps {
  project: Project;
  variant?: ProjectCardVariant;
}

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const t = useTranslations("Projects");
  const locale = useLocale();
  const initialCount = variant === "featured" ? 5 : 4;
  const priority = prioritizedTechnologies[project.id] ?? [];
  const orderedTechnologies = [
    ...priority.filter((technology) => project.technologies.includes(technology)),
    ...project.technologies.filter((technology) => !priority.includes(technology)),
  ];
  const visibleTechnologies = showAllTechnologies ? orderedTechnologies : orderedTechnologies.slice(0, initialCount);
  const remainingCount = orderedTechnologies.length - initialCount;

  return (
    <motion.article
      className={`project-card interactive-surface group flex h-full flex-col overflow-hidden rounded-2xl border border-border ${variant === "compact" ? "project-card-compact" : "project-card-featured"}`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <InteractiveGlow />
      <span aria-hidden="true" className="project-energy-line" />
      <ProjectVisual visual={project.visual} variant={variant} />

      <div className={`flex flex-1 flex-col ${variant === "compact" ? "p-4 sm:p-5" : "p-5 sm:p-6"}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{getLocalizedText(project.category, locale)}</p>
          <StatusBadge status={project.status} />
        </div>

        <h4 className={variant === "compact" ? "mt-3 text-lg sm:text-xl" : "mt-4 text-xl sm:text-2xl"}>{project.title}</h4>
        <p className={`project-description mt-2 text-sm text-muted ${variant === "featured" ? "leading-7" : "leading-6"}`}>{getLocalizedText(project.description, locale)}</p>

        <div className={`project-problem ${variant === "compact" ? "mt-3 py-1 pl-3" : "mt-4 py-1.5 pl-4"}`}>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground"><span aria-hidden="true">◇</span>{t("problemLabel")}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{getLocalizedText(project.problem, locale)}</p>
        </div>

        <ul aria-label={t("technologiesLabel", { title: project.title })} className={`${variant === "compact" ? "mt-3" : "mt-4"} flex flex-wrap gap-2`}>
          {visibleTechnologies.map((technology) => <li key={technology} className="rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-muted">{technology}</li>)}
          {remainingCount > 0 ? (
            <li>
              <button type="button" className="project-tech-toggle rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-primary" aria-expanded={showAllTechnologies} aria-label={showAllTechnologies ? t("showFewerTechnologies", { title: project.title }) : t("showMoreTechnologies", { count: remainingCount, title: project.title })} onClick={() => setShowAllTechnologies((current) => !current)}>
                {showAllTechnologies ? t("showFewer") : `+${remainingCount}`}
              </button>
            </li>
          ) : null}
        </ul>

        <div className={`mt-auto flex flex-wrap gap-2 ${variant === "compact" ? "pt-4" : "pt-5"}`} aria-label={t("repositoriesLabel", { title: project.title })}>
          {project.repositories.map((repository) => (
            <a key={repository.url} href={repository.url} target="_blank" rel="noopener noreferrer" className="external-action inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3.5 text-sm font-semibold text-foreground transition-[border-color,color,transform] hover:border-primary hover:text-primary active:scale-[0.98]">
              {repository.label}<ExternalLinkIcon /><span className="sr-only">({t("externalLink")})</span>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
