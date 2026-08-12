import type { HTMLAttributes } from "react";

import { Reveal } from "./motion";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  id,
  ...props
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col ${alignment} ${className}`} {...props}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={id} className="mt-3 text-3xl sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-justify leading-7 text-muted">{description}</p> : null}
      </div>
    </Reveal>
  );
}
