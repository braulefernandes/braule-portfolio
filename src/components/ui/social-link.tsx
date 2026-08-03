import type { SocialIcon, SocialLink as SocialLinkType } from "@/types";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { ExternalLinkIcon } from "@/components/icons/external-link-icon";

const iconPaths: Record<SocialIcon, ReactNode> = {
  github: <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.3-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" />,
  linkedin: <><path d="M6.5 8.5V18M6.5 5.5v.1M10.5 18v-5.3c0-2.8 4-3 4 0V18M10.5 9.5V18" /><rect x="3" y="3" width="18" height="18" rx="3" /></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
};

interface SocialLinkProps {
  link: SocialLinkType;
  className?: string;
  showExternalIndicator?: boolean;
}

export function SocialLink({ link, className = "", showExternalIndicator = true }: SocialLinkProps) {
  const t = useTranslations("Social");
  return (
    <a
      href={link.url}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`external-action inline-flex min-h-11 items-center gap-3 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-[border-color,color,box-shadow,transform] hover:border-primary hover:text-primary hover:shadow-[0_8px_24px_var(--shadow)] active:scale-[0.98] ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[link.icon]}
      </svg>
      {t(link.id)}
      {link.external && showExternalIndicator ? <ExternalLinkIcon className="ml-auto" /> : null}
      {link.external ? <span className="sr-only">({t("externalLink")})</span> : null}
    </a>
  );
}
