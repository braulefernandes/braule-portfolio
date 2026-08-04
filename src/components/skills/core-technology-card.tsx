import { useLocale } from "next-intl";

import { InteractiveGlow } from "@/components/ui/interactive-glow";
import { CoreTechnologyIcon } from "@/components/skills/core-technology-icon";
import type { CoreTechnology } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";

export function CoreTechnologyCard({ technology }: { technology: CoreTechnology }) {
  const locale = useLocale();

  return (
    <article className="skills-surface core-technology-card" data-visual={technology.visual}>
      <InteractiveGlow />
      <span aria-hidden="true" className="skills-energy-line" />
      <div aria-hidden="true" className="core-technology-visual"><CoreTechnologyIcon visual={technology.visual} /></div>
      <div className="core-technology-copy">
        <p className="core-technology-area">{getLocalizedText(technology.area, locale)}</p>
        <h4>{technology.name}</h4>
        <p>{getLocalizedText(technology.description, locale)}</p>
      </div>
    </article>
  );
}
