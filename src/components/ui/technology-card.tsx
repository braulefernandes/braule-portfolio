import { useLocale, useTranslations } from "next-intl";
import type { SkillCategory } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";
import { InteractiveGlow } from "./interactive-glow";

export function TechnologyCard({ category }: { category: SkillCategory }) {
  const t = useTranslations("Technologies");
  const locale = useLocale();
  const categoryName = getLocalizedText(category.name, locale);
  return (
    <article className="interactive-surface group h-full rounded-2xl border border-border bg-surface p-6 transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-primary">
      <InteractiveGlow />
      <div className="mb-5 flex items-center gap-3">
        <span aria-hidden="true" className="size-2 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]" />
        <h3 className="text-lg">{categoryName}</h3>
      </div>
      <ul className="flex flex-wrap gap-2" aria-label={t("categoryLabel", { category: categoryName })}>
        {category.skills.map((skill) => (
          <li key={skill} className="rounded-lg border border-border bg-background-secondary px-3 py-2 text-sm font-medium text-muted transition-colors group-hover:text-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
