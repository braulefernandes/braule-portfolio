"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const section = root?.parentElement;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !section || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        root.style.setProperty("--hero-shift-x", `${x * 10}px`);
        root.style.setProperty("--hero-shift-y", `${y * 8}px`);
        root.style.setProperty("--hero-pointer-x", `${event.clientX - bounds.left}px`);
        root.style.setProperty("--hero-pointer-y", `${event.clientY - bounds.top}px`);
      });
    };

    section.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="interactive-background">
      <span className="interactive-background-pointer" />
      <span className="tech-symbol tech-symbol-one">{"{ }"}</span>
      <span className="tech-symbol tech-symbol-two">{"< >"}</span>
      <span className="tech-symbol tech-symbol-three">{"/"}</span>
    </div>
  );
}
