import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";

import { routing } from "@/i18n/routing";
import { personalInfo } from "@/data/personal-info";
import { siteConfig, siteUrl } from "@/lib/site";
import { MotionProvider } from "@/providers/motion-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { toPortfolioLocale } from "@/utils/localized-content";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Courier New", "monospace"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#07070a" },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const portfolioLocale = toPortfolioLocale(locale);
  const title = personalInfo.seo.title[portfolioLocale];
  const description = personalInfo.seo.description[portfolioLocale];
  const canonicalPath = `/${locale}`;
  const ogLocale = locale === "pt" ? "pt_BR" : "en_US";

  return {
    metadataBase: siteUrl,
    title,
    description,
    authors: [{ name: siteConfig.name, url: siteConfig.github }],
    creator: siteConfig.name,
    keywords: personalInfo.seo.keywords[portfolioLocale],
    alternates: {
      canonical: canonicalPath,
      languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: locale === "pt" ? ["en_US"] : ["pt_BR"],
      url: canonicalPath,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: `${canonicalPath}/opengraph-image`, width: 1200, height: 630, alt: `${personalInfo.name} — ${personalInfo.shareTitle}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: `${canonicalPath}/opengraph-image`, alt: `${personalInfo.name} — ${personalInfo.shareTitle}` }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const portfolioLocale = toPortfolioLocale(locale);
  const localizedUrl = new URL(`/${locale}`, siteUrl).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: localizedUrl,
    name: personalInfo.seo.title[portfolioLocale],
    description: personalInfo.seo.description[portfolioLocale],
    inLanguage: locale === "pt" ? "pt-BR" : "en",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      url: localizedUrl,
      email: `mailto:${siteConfig.email}`,
      jobTitle: personalInfo.professionalTitle[portfolioLocale],
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
  };

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <Script
          id={`profile-page-json-ld-${locale}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <MotionProvider>{children}</MotionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
