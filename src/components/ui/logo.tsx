"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { BrandSignature } from "./brand-signature";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export function Logo({ className = "", variant = "header" }: LogoProps) {
  const t = useTranslations("Accessibility");
  return (
    <Link
      href="/"
      aria-label={t("homeLabel")}
      className={`inline-flex min-h-11 min-w-0 items-center text-foreground ${className}`}
    >
      <BrandSignature variant={variant} decorative />
    </Link>
  );
}
