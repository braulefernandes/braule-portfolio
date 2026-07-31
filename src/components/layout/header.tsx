"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navigationLinks } from "@/data/navigation";

import { Container } from "./container";

export function Header() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeMenu() {
    setIsOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-[var(--overlay)] backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav aria-label={t("navigationLabel")} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {t(`links.${item.id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-lg text-foreground transition-[background-color,transform] hover:bg-surface active:scale-95 lg:hidden"
          >
            <span className="sr-only">{isOpen ? t("closeMenu") : t("openMenu")}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] border-t border-border bg-background lg:hidden"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
          >
            <nav aria-label={t("mobileNavigationLabel")} className="h-full overflow-y-auto">
              <Container className="py-6">
                <ul className="flex flex-col gap-2">
                  {navigationLinks.map((item, index) => (
                    <li key={item.href}>
                      <a
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex min-h-12 items-center rounded-xl border border-transparent px-4 py-3 text-base font-semibold text-muted transition-colors hover:border-border hover:bg-surface hover:text-foreground"
                      >
                        {t(`links.${item.id}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </Container>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
