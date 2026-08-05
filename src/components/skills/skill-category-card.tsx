import { useLocale, useTranslations } from "next-intl";

import { InteractiveGlow } from "@/components/ui/interactive-glow";
import type { SkillCategory, SkillCategoryIcon } from "@/types";
import { getLocalizedText } from "@/utils/localized-content";

function CategoryIcon({ icon }: { icon: SkillCategoryIcon }) {
  if (icon === "frontend") return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="15" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01"/></svg>;
  if (icon === "backend") return <svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>;
  if (icon === "databases") return <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="4"/></svg>;
}

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const locale = useLocale();
  const t = useTranslations("Technologies");
  const title = getLocalizedText(category.name, locale);

  return (
    <article className="skills-surface skill-category-card" data-category={category.id}>
      <InteractiveGlow />
      <span aria-hidden="true" className="skills-energy-line" />
      <div className="skill-category-heading">
        <div><h4>{title}</h4><p>{getLocalizedText(category.description, locale)}</p></div>
        <span aria-hidden="true" className="skill-category-icon"><CategoryIcon icon={category.icon} /></span>
      </div>
      <ul className="technology-pill-list" aria-label={t("categoryLabel", { category: title })}>
        {category.skills.map((skill) => <li className="technology-pill" key={skill}><span aria-hidden="true" />{skill}</li>)}
      </ul>
      <div aria-hidden="true" className="skill-category-flow"><i /><i /><i /></div>
    </article>
  );
}
