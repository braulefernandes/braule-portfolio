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
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      {t(status)}
    </span>
  );
}
