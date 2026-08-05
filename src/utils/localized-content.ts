import type { LocalizedText, PortfolioLocale } from "@/types";

export function toPortfolioLocale(locale: string): PortfolioLocale {
  return locale === "en" ? "en" : "pt";
}

export function getLocalizedText(value: LocalizedText, locale: string) {
  return value[toPortfolioLocale(locale)];
}
