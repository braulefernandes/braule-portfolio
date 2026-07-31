"use client";

import { useTranslations } from "next-intl";

import { personalInfo } from "@/data/personal-info";
import { Link } from "@/i18n/navigation";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const t = useTranslations("Accessibility");
  return (
    <Link
      href="/"
      aria-label={t("homeLabel")}
      className={`inline-flex min-h-11 items-center font-bold tracking-[0.18em] text-foreground ${className}`}
    >
      <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">
        {personalInfo.monogram}
      </span>
    </Link>
  );
}
