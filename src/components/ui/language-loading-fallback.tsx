"use client";

import { useLocale } from "next-intl";

import { LanguageLoadingOverlay } from "./language-loading-overlay";

export function LanguageLoadingFallback() {
  const locale = useLocale();
  const label = locale === "en" ? "Switching language..." : "Alterando idioma...";

  return (
    <>
      <div role="status" aria-live="polite" className="sr-only">
        {label}
      </div>
      <LanguageLoadingOverlay visible label={label} />
    </>
  );
}
