"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";

import { Button } from "./button";

const themes = ["light", "dark", "system"] as const;

const emptySubscribe = () => () => undefined;

function ThemeIcon({ theme }: { theme: (typeof themes)[number] }) {
  if (theme === "light") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function ThemeToggle() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { theme = "system", setTheme } = useTheme();
  const t = useTranslations("Theme");

  const currentTheme = themes.includes(theme as (typeof themes)[number])
    ? (theme as (typeof themes)[number])
    : "system";
  const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];

  if (!mounted) {
    return <Button variant="icon" aria-label={t("loading")} disabled />;
  }

  return (
    <Button
      variant="icon"
      onClick={() => setTheme(nextTheme)}
      aria-label={t("currentAndNext", { current: t(currentTheme), next: t(nextTheme) })}
      title={t("title", { theme: t(currentTheme) })}
    >
      <ThemeIcon theme={currentTheme} />
    </Button>
  );
}
