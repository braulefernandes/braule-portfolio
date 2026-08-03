import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { buttonStyles } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { SocialLink } from "@/components/ui/social-link";
import { Reveal } from "@/components/ui/motion";
import { InteractiveGlow } from "@/components/ui/interactive-glow";
import { socialLinks } from "@/data/social-links";
import { personalInfo } from "@/data/personal-info";
import { getLocalizedText } from "@/utils/localized-content";

const externalSocialLinks = socialLinks.filter((link) => link.external);
const emailLink = socialLinks.find((link) => link.id === "email")!;
const email = emailLink.url.replace("mailto:", "");

function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function ContactSection() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  return (
    <Section id="contato" aria-labelledby="contact-title" className="scroll-mt-18 border-t border-border bg-background">
      <Reveal>
      <div className="interactive-surface relative overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-[0_24px_80px_var(--shadow)] sm:p-10 lg:p-12">
        <InteractiveGlow />
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-72 rounded-full bg-[var(--glow-primary)] blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <SectionTitle eyebrow={t("eyebrow")} title={t("title")} description={getLocalizedText(personalInfo.contactMessage, locale)} id="contact-title" />
            <a href={emailLink.url} className={buttonStyles("primary", "mt-7 min-h-12 px-5")}>
              <MailIcon />
              {t("sendEmail")}
            </a>
            <a href={emailLink.url} className="mt-3 inline-flex min-h-11 max-w-full items-center break-all text-sm font-medium text-muted transition-colors hover:text-primary">
              {email}
            </a>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">{getLocalizedText(personalInfo.location.display, locale)}</p>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {externalSocialLinks.map((link) => <SocialLink key={link.id} link={link} />)}
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </Section>
  );
}
