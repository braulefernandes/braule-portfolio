"use client";

import { useEffect, useRef } from "react";

import type { AboutHighlightIcon, AboutHighlightVariant } from "@/types";

interface AboutHighlightCardProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  meta?: string;
  icon: AboutHighlightIcon;
  variant: AboutHighlightVariant;
}

const iconPaths: Record<AboutHighlightIcon, React.ReactNode> = {
  education: <><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 11.5V16c2.8 2.1 7.2 2.1 10 0v-4.5M21 9v6" /></>,
  activity: <><path d="M4 12h3l2-5 4 10 2-5h5" /><circle cx="4" cy="12" r="1" /><circle cx="20" cy="12" r="1" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
  opportunity: <><circle cx="12" cy="12" r="3" /><path d="M6.35 6.35a8 8 0 0 0 0 11.3M17.65 6.35a8 8 0 0 1 0 11.3M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17" /></>,
};

export function AboutHighlightCard(props: AboutHighlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!card || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--about-spotlight-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--about-spotlight-y", `${event.clientY - bounds.top}px`);
      });
    };
    card.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      card.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <article ref={cardRef} className="about-highlight-card group" data-variant={props.variant}>
      <span className="about-card-spotlight" aria-hidden="true" />
      <div className="about-card-heading">
        <p className="about-card-eyebrow">{props.eyebrow}</p>
        <span className="about-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
            {iconPaths[props.icon]}
          </svg>
        </span>
      </div>
      <div className="about-card-body">
        <h3 className="about-card-title">
          {props.variant === "availability" ? <span className="about-availability-dot" aria-hidden="true" /> : null}
          {props.title}
        </h3>
        {props.subtitle ? <p className="about-card-subtitle">{props.subtitle}</p> : null}
        {props.description ? <p className="about-card-description">{props.description}</p> : null}
        {props.meta ? <p className="about-card-meta">{props.meta}</p> : null}
      </div>
    </article>
  );
}
