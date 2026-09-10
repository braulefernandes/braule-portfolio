import { useTranslations } from "next-intl";
import type { ComponentType } from "react";

import { ChevronIcon } from "@/components/icons/chevron-icon";
import { Section } from "@/components/layout/section";
import { buttonStyles } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGrid, RevealItem } from "@/components/ui/motion";
import { InteractiveGlow } from "@/components/ui/interactive-glow";
import { socialLinks } from "@/data/social-links";
import { getGmailComposeUrl } from "@/lib/email";

type ContactIcon = "github" | "linkedin" | "email" | "location";

interface ContactItem {
  id: "github" | "linkedin" | "email" | "location";
  icon: ContactIcon;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  accessibleLabel?: string;
}

function MailIcon({ className = "" }: { className?: string }) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

function GithubIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.3-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" /></svg>;
}

function LinkedInIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 8.5V18M6.5 5.5v.1M10.5 18v-5.3c0-2.8 4-3 4 0V18M10.5 9.5V18" /><rect x="3" y="3" width="18" height="18" rx="3" /></svg>;
}

function LocationIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10.2c0 5.5-8 10-8 10s-8-4.5-8-10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10.2" r="2.5" /></svg>;
}

const contactIcons = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
  location: LocationIcon,
} satisfies Record<ContactIcon, ComponentType>;

function ContactCard({ item, externalLinkLabel }: { item: ContactItem; externalLinkLabel: string }) {
  const Icon = contactIcons[item.icon];
  const content = <>
    <InteractiveGlow />
    <span className="contact-card-icon"><Icon /></span>
    <span className="contact-card-copy"><strong>{item.title}</strong><small>{item.description}</small></span>
    {item.href ? <span className="contact-card-arrow"><ChevronIcon /></span> : <span aria-hidden="true" className="contact-card-arrow-placeholder" />}
  </>;

  if (!item.href) {
    return <div className="contact-card contact-card-location interactive-surface">{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-label={item.accessibleLabel}
      className="contact-card contact-card-link interactive-surface group"
    >
      {content}
      {item.external ? <span className="sr-only">({externalLinkLabel})</span> : null}
    </a>
  );
}

export function ContactSection() {
  const t = useTranslations("Contact");
  const gmailComposeUrl = getGmailComposeUrl(t("emailSubject"));
  const contactItems: ContactItem[] = [
    { id: "github", icon: "github", title: t("githubTitle"), description: t("githubDescription"), href: socialLinks.find((link) => link.id === "github")!.url, external: true },
    { id: "linkedin", icon: "linkedin", title: t("linkedinTitle"), description: t("linkedinDescription"), href: socialLinks.find((link) => link.id === "linkedin")!.url, external: true },
    { id: "email", icon: "email", title: t("emailTitle"), description: t("emailDescription"), href: gmailComposeUrl, external: true, accessibleLabel: t("emailAccessibleLabel") },
    { id: "location", icon: "location", title: t("locationTitle"), description: t("locationDescription") },
  ];

  return (
    <Section anchorId="contato" aria-labelledby="contact-title" className="contact-section relative isolate overflow-hidden border-t border-border">
      <div aria-hidden="true" className="contact-atmosphere" />
      <div className="contact-layout relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.9fr)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(30rem,0.9fr)] xl:gap-20">
        <div className="contact-intro">
          <SectionTitle eyebrow={t("eyebrow")} title={t("title")} description={t("description")} id="contact-title" />
          <p className="contact-supporting-copy">{t("supportingCopy")}</p>
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("sendEmailAccessibleLabel")}
            className={buttonStyles("primary", "contact-primary-action mt-8 h-12 w-full whitespace-nowrap px-5 text-base sm:w-auto")}
          >
            <MailIcon className="size-4 shrink-0" />
            <span>{t("sendEmail")}</span>
          </a>
        </div>

        <RevealGrid className="contact-cards grid auto-rows-fr gap-3">
          {contactItems.map((item) => (
            <RevealItem key={item.id} className="h-full">
              <ContactCard item={item} externalLinkLabel={t("externalLink")} />
            </RevealItem>
          ))}
        </RevealGrid>
      </div>
    </Section>
  );
}
