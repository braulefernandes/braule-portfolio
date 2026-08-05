import { useLocale } from "next-intl";

import { AboutHighlightCard } from "@/components/ui/about-highlight-card";
import { RevealGrid, RevealItem } from "@/components/ui/motion";
import { aboutHighlights } from "@/data/about-highlights";
import { getLocalizedText } from "@/utils/localized-content";

export function AboutHighlights() {
  const locale = useLocale();

  return (
    <RevealGrid className="grid auto-rows-fr gap-4 sm:grid-cols-2">
      {aboutHighlights.map((highlight) => (
        <RevealItem key={highlight.id} className="h-full">
          <AboutHighlightCard
            eyebrow={getLocalizedText(highlight.eyebrow, locale)}
            title={getLocalizedText(highlight.title, locale)}
            subtitle={highlight.subtitle ? getLocalizedText(highlight.subtitle, locale) : undefined}
            description={highlight.description ? getLocalizedText(highlight.description, locale) : undefined}
            meta={highlight.meta ? getLocalizedText(highlight.meta, locale) : undefined}
            icon={highlight.icon}
            variant={highlight.variant}
          />
        </RevealItem>
      ))}
    </RevealGrid>
  );
}
