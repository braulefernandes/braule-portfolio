"use client";

import { useTranslations } from "next-intl";

import type { ProjectStatus } from "@/types";

interface StatusBadgeProps {
  status: ProjectStatus;
}

const statusConfig: Record<ProjectStatus, { className: string }> = {
  WIP: {
    className: "bg-warning-surface text-warning",
  },
  DONE: {
    className: "bg-success-surface text-success",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const t = useTranslations("Status");
  const config = statusConfig[status];

  return (
    <span
      className={`status-badge status-badge-${status.toLowerCase()} inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      <span aria-hidden="true" className="status-badge-dot size-1.5 rounded-full bg-current" />
      <span className="font-mono">{status}</span>
      <span aria-hidden="true">&mdash;</span>
      <span>{t(status)}</span>
    </span>
  );
}
