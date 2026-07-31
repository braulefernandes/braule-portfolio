import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    "pt-BR": new URL("/pt", siteUrl).toString(),
    en: new URL("/en", siteUrl).toString(),
  };

  return routing.locales.map((locale) => ({
    url: new URL(`/${locale}`, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
