"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import type { Project } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";

import { ProjectVisual } from "./project-visual";
import { StatusBadge } from "./status-badge";

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 5h5v5M19 5l-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("Projects");
  const locale = useLocale();

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[background-color,border-color,box-shadow] hover:border-primary hover:shadow-[0_20px_60px_var(--shadow)] focus-within:border-primary focus-within:shadow-[0_20px_60px_var(--shadow)]"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
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
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3.5 text-sm font-semibold text-foreground transition-[border-color,color,transform] hover:border-primary hover:text-primary active:scale-[0.98]"
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
