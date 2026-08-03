"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface HeroCaricatureProps {
  alt: string;
}

export function HeroCaricature({ alt }: HeroCaricatureProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !finePointer.matches || !desktop.matches || reducedMotion.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = root.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        root.style.setProperty("--caricature-x", `${x * 5}px`);
        root.style.setProperty("--caricature-y", `${y * 4}px`);
        root.style.setProperty("--caricature-rotate", `${x * 1.5}deg`);
      });
    };
    const reset = () => {
      root.style.removeProperty("--caricature-x");
      root.style.removeProperty("--caricature-y");
      root.style.removeProperty("--caricature-rotate");
    };

    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <motion.div
      ref={rootRef}
      className="hero-caricature group relative isolate mx-auto flex w-full items-end justify-center"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.65, delay: reduceMotion ? 0 : 0.12 }}
    >
      <div aria-hidden="true" className="hero-caricature-glow" />
      <span aria-hidden="true" className="hero-caricature-dot hero-caricature-dot-left" />
      <span aria-hidden="true" className="hero-caricature-dot hero-caricature-dot-right" />
      <div className="hero-caricature-pointer relative z-10 flex h-full w-full items-end justify-center">
        <motion.div
          className="hero-caricature-float flex h-full w-full items-end justify-center"
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/braule-caricatura.png"
            alt={alt}
            width={428}
            height={1179}
            sizes="(max-width: 639px) 48vw, (max-width: 1023px) 34vw, (max-width: 1279px) 24vw, 300px"
            preload
            quality={90}
            className="hero-caricature-image h-full w-auto max-w-full object-contain object-bottom"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
