import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { DevRunnerFooter } from "@/components/game/dev-runner-footer";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { SocialLink } from "@/components/ui/social-link";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary py-10 lg:py-12">
      <Container>
        <div className="footer-main-grid">
          <div className="footer-identity">
            <p className="font-semibold text-foreground">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-muted">{t("professionalTitle")}</p>
          </div>

          <DevRunnerFooter />

          <div className="footer-socials flex flex-wrap gap-2 md:justify-end">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.id}
                link={link}
                showExternalIndicator={false}
                accessibleLabel={link.id === "email" ? t("emailAccessibleLabel") : undefined}
                className="footer-social-link bg-transparent px-4"
              />
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright", { year: currentYear, name: personalInfo.name })}</p>
          <a href="#inicio" className="chevron-action inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary">
            {t("backToTop")}
            <ChevronIcon direction="up" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
