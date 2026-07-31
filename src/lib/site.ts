const vercelHostname = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

function normalizeUrl(value: string) {
  const url = value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;
  return new URL(url);
}

export const siteUrl = configuredUrl
  ? normalizeUrl(configuredUrl)
  : vercelHostname
    ? normalizeUrl(vercelHostname)
    : new URL("http://localhost:3000");

export const siteConfig = {
  name: personalInfo.name,
  monogram: personalInfo.monogram,
  email: personalInfo.contacts.email,
  github: personalInfo.contacts.github,
  linkedin: personalInfo.contacts.linkedin,
  location: {
    city: personalInfo.location.city,
    region: personalInfo.location.region,
    country: personalInfo.location.countryCode,
  },
} as const;
import { personalInfo } from "@/data/personal-info";
