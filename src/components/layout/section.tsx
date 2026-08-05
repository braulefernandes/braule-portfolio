import type { HTMLAttributes } from "react";

import { Container } from "./container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  anchorId?: string;
  containerClassName?: string;
}

export function SectionAnchor({ id }: { id: string }) {
  return <span id={id} className="scroll-anchor" aria-hidden="true" />;
}

export function Section({
  anchorId,
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${className}`} {...props}>
      <Container className={containerClassName}>
        {anchorId ? <SectionAnchor id={anchorId} /> : null}
        {children}
      </Container>
    </section>
  );
}
