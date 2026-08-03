"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const locales: Array<{ locale: AppLocale; label: string }> = [
  { locale: "pt", label: "PT" },
  { locale: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Header");

  function changeLocale(locale: AppLocale) {
    if (locale === currentLocale) return;
    const localizedPath = `/${locale}${pathname === "/" ? "" : pathname}`;
    window.location.assign(`${localizedPath}${window.location.search}${window.location.hash}`);
  }

  return (
    <div role="group" aria-label={t("languageLabel")} className="flex rounded-lg border border-border bg-surface p-0.5">
      {locales.map(({ locale, label }) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => changeLocale(locale)}
            aria-pressed={isActive}
            aria-label={isActive ? `${label}. ${t("languageCurrent")}` : label}
            className={`inline-flex min-h-10 min-w-10 items-center justify-center rounded-md px-2 text-xs font-bold transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted hover:bg-surface-elevated hover:text-foreground"}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
