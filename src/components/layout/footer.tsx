import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { SocialLink } from "@/components/ui/social-link";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary py-10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 sm:items-end">
          <div>
            <Logo />
            <p className="mt-3 font-semibold text-foreground">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-muted">{t("developedBy", { name: personalInfo.name })}</p>
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            {socialLinks.map((link) => (
              <SocialLink key={link.id} link={link} showExternalIndicator={false} className="bg-transparent px-3" />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright", { year: currentYear, name: personalInfo.name })}</p>
          <a href="#inicio" className="inline-flex min-h-11 w-fit items-center font-semibold text-foreground transition-colors hover:text-primary">
            {t("backToTop")}
          </a>
        </div>
      </Container>
    </footer>
  );
}
