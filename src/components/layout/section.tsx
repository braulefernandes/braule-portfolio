import type { HTMLAttributes } from "react";

import { Container } from "./container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${className}`} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
