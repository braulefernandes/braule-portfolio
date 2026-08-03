"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { ExternalLinkIcon } from "@/components/icons/external-link-icon";
import type { Project } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";

import { ProjectVisual } from "./project-visual";
import { InteractiveGlow } from "./interactive-glow";
import { StatusBadge } from "./status-badge";

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("Projects");
  const locale = useLocale();

  return (
    <motion.article
      className="interactive-surface group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[background-color,border-color,box-shadow] hover:border-primary focus-within:border-primary"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <InteractiveGlow />
      <ProjectVisual visual={project.visual} title={project.title} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{getLocalizedText(project.category, locale)}</p>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-4 text-xl sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{getLocalizedText(project.description, locale)}</p>

        <div className="mt-5 rounded-xl border border-border bg-background-secondary p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground">{t("problemLabel")}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{getLocalizedText(project.problem, locale)}</p>
        </div>

        <ul aria-label={t("technologiesLabel", { title: project.title })} className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-muted">
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6" aria-label={t("repositoriesLabel", { title: project.title })}>
          {project.repositories.map((repository) => (
            <a
              key={repository.url}
              href={repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-action inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3.5 text-sm font-semibold text-foreground transition-[border-color,color,transform] hover:border-primary hover:text-primary active:scale-[0.98]"
            >
              {repository.label}
              <ExternalLinkIcon />
              <span className="sr-only">({t("externalLink")})</span>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
