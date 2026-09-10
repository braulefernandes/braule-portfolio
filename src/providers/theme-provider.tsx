"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useSyncExternalStore, type ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

const emptySubscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeProvider({ children, scriptProps, ...props }: ThemeProviderProps) {
  const isClient = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={["light", "dark"]}
      {...props}
      scriptProps={{
        ...scriptProps,
        // Keep the initial anti-flash script executable during SSR/hydration.
        // On client mounts, the provider's effects apply the theme instead.
        type: isClient ? "application/json" : scriptProps?.type,
      }}
    >
      {children}
    </NextThemesProvider>
  );
}
