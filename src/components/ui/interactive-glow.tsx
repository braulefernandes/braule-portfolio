"use client";

import { useEffect, useRef } from "react";

export function InteractiveGlow() {
  const glowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const container = glow?.parentElement;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!glow || !container || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    const updatePosition = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = container.getBoundingClientRect();
        container.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
        container.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
        container.style.setProperty("--spotlight-opacity", "1");
      });
    };
    const hide = () => container.style.setProperty("--spotlight-opacity", "0");

    container.addEventListener("pointermove", updatePosition, { passive: true });
    container.addEventListener("pointerleave", hide);
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("pointermove", updatePosition);
      container.removeEventListener("pointerleave", hide);
    };
  }, []);

  return <span ref={glowRef} aria-hidden="true" className="interactive-glow" />;
}
