"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

import { LanguageLoadingOverlay } from "./language-loading-overlay";

const locales: Array<{ locale: AppLocale; label: string }> = [
  { locale: "pt", label: "PT" },
  { locale: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Header");
  const [isPending, startTransition] = useTransition();
  const [requestedLocale, setRequestedLocale] = useState<AppLocale | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const loadingLabel = currentLocale === "en" ? "Switching language..." : "Alterando idioma...";
  const visualLocale = requestedLocale ?? currentLocale;

  useEffect(() => {
    if (!isPending) return;

    const timer = window.setTimeout(() => setShowOverlay(true), 120);
    return () => window.clearTimeout(timer);
  }, [isPending]);

  function changeLocale(locale: AppLocale) {
    if (locale === currentLocale || isPending) return;

    setRequestedLocale(locale);
    setShowOverlay(false);
    startTransition(() => {
      try {
        router.replace(`${pathname}${window.location.search}${window.location.hash}`, {
          locale,
          scroll: false,
        });
      } catch (error) {
        setRequestedLocale(null);
        if (process.env.NODE_ENV === "development") {
          console.error("Unable to switch language.", error);
        }
      }
    });
  }

  return (
    <>
      <div
        role="group"
        aria-label={t("languageLabel")}
        aria-busy={isPending}
        className={`relative inline-grid h-11 w-24 grid-cols-2 rounded-full border border-border bg-surface/70 p-1 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--foreground)_8%,transparent),0_5px_18px_var(--shadow)] backdrop-blur-md ${isPending ? "cursor-wait" : ""}`}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-r from-primary via-primary-hover to-accent shadow-[0_0_16px_var(--glow-primary)] transition-transform duration-300 ease-out motion-reduce:transition-none ${visualLocale === "en" ? "translate-x-full" : "translate-x-0"}`}
        />
        {locales.map(({ locale, label }) => {
          const isActive = locale === currentLocale;
          const isVisuallyActive = locale === visualLocale;
          const isRequested = isPending && locale === requestedLocale;
          const languageName = locale === "pt" ? "Português" : "English";
          const accessibleLabel =
            currentLocale === "en"
              ? `Switch language to ${locale === "pt" ? "Portuguese" : "English"}`
              : `Alterar idioma para ${locale === "pt" ? "português" : "inglês"}`;
          return (
            <button
              key={locale}
              type="button"
              onClick={() => changeLocale(locale)}
              disabled={isPending}
              aria-pressed={isActive}
              aria-label={isActive ? `${accessibleLabel}. ${t("languageCurrent")}` : accessibleLabel}
              title={languageName}
              className={`relative z-10 inline-flex min-h-0 min-w-0 items-center justify-center rounded-full px-1 text-sm font-semibold leading-none tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-wait ${isVisuallyActive ? "text-white" : "text-muted hover:text-foreground"}`}
            >
              <span>{label}</span>
              {isRequested ? (
                <span className="absolute left-0.5 size-2.5 animate-spin rounded-full border border-current/30 border-t-current motion-reduce:animate-pulse" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="sr-only">
        {isPending ? loadingLabel : ""}
      </div>
      <LanguageLoadingOverlay visible={isPending && showOverlay} label={loadingLabel} />
    </>
  );
}
