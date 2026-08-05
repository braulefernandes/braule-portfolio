"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

type ParticleColor = "purple" | "blue" | "cyan";

interface RisingParticle {
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  color: ParticleColor;
  halo?: boolean;
}

type RisingParticleStyle = CSSProperties & {
  "--particle-size": string;
  "--particle-duration": string;
  "--particle-delay": string;
  "--particle-drift": string;
  "--particle-opacity": number;
};

const risingParticles: RisingParticle[] = [
  { left: "4%", size: 4, duration: 16, delay: -7, drift: 8, opacity: 0.4, color: "purple" },
  { left: "10%", size: 6, duration: 22, delay: -15, drift: -12, opacity: 0.34, color: "blue", halo: true },
  { left: "16%", size: 3, duration: 14, delay: -4, drift: 5, opacity: 0.36, color: "cyan" },
  { left: "23%", size: 8, duration: 26, delay: -21, drift: 15, opacity: 0.26, color: "purple", halo: true },
  { left: "29%", size: 4, duration: 18, delay: -11, drift: -7, opacity: 0.32, color: "blue" },
  { left: "35%", size: 5, duration: 20, delay: -2, drift: 11, opacity: 0.28, color: "cyan" },
  { left: "41%", size: 4, duration: 17, delay: -13, drift: -4, opacity: 0.26, color: "purple" },
  { left: "47%", size: 11, duration: 28, delay: -24, drift: 18, opacity: 0.22, color: "blue", halo: true },
  { left: "53%", size: 3, duration: 15, delay: -9, drift: -8, opacity: 0.34, color: "cyan" },
  { left: "59%", size: 6, duration: 23, delay: -18, drift: 6, opacity: 0.3, color: "purple", halo: true },
  { left: "65%", size: 4, duration: 19, delay: -5, drift: -15, opacity: 0.36, color: "blue" },
  { left: "71%", size: 5, duration: 21, delay: -14, drift: 9, opacity: 0.38, color: "cyan" },
  { left: "77%", size: 7, duration: 25, delay: -20, drift: -18, opacity: 0.28, color: "purple", halo: true },
  { left: "82%", size: 4, duration: 16, delay: -3, drift: 4, opacity: 0.4, color: "blue" },
  { left: "87%", size: 6, duration: 24, delay: -16, drift: 13, opacity: 0.31, color: "cyan", halo: true },
  { left: "91%", size: 12, duration: 28, delay: -10, drift: -10, opacity: 0.2, color: "purple", halo: true },
  { left: "95%", size: 4, duration: 18, delay: -12, drift: 7, opacity: 0.34, color: "blue" },
  { left: "98%", size: 5, duration: 22, delay: -6, drift: -6, opacity: 0.3, color: "cyan" },
];

function RisingParticles() {
  return (
    <div className="hero-background-particles">
      {risingParticles.map((particle, index) => {
        const style: RisingParticleStyle = {
          left: particle.left,
          "--particle-size": `${particle.size}px`,
          "--particle-duration": `${particle.duration}s`,
          "--particle-delay": `${particle.delay}s`,
          "--particle-drift": `${particle.drift}px`,
          "--particle-opacity": particle.opacity,
        };

        return (
          <span
            key={`${particle.left}-${particle.delay}`}
            className={`hero-rising-particle hero-rising-particle-${particle.color}${particle.halo ? " hero-rising-particle-halo" : ""}`}
            style={style}
            data-particle-index={index}
          />
        );
      })}
    </div>
  );
}

function FloatingGlows() {
  return (
    <div className="hero-background-glows">
      <span className="hero-ambient-glow hero-ambient-glow-primary" />
      <span className="hero-ambient-glow hero-ambient-glow-accent" />
      <span className="hero-ambient-glow hero-ambient-glow-cyan" />
    </div>
  );
}

function AbstractGeometry() {
  return (
    <div className="hero-background-geometry">
      <span className="hero-orbit hero-orbit-large" />
      <span className="hero-orbit hero-orbit-small" />
      <span className="hero-circuit-line hero-circuit-line-horizontal" />
      <span className="hero-circuit-line hero-circuit-line-vertical" />
      <span className="hero-circuit-node hero-circuit-node-one" />
      <span className="hero-circuit-node hero-circuit-node-two" />
    </div>
  );
}

function LightPoints() {
  return (
    <div className="hero-background-points">
      <span className="hero-light-point hero-light-point-one" />
      <span className="hero-light-point hero-light-point-two" />
      <span className="hero-light-point hero-light-point-three" />
      <span className="hero-light-point hero-light-point-four" />
      <span className="hero-light-point hero-light-point-five" />
    </div>
  );
}

function TechSymbols() {
  return (
    <div className="hero-background-symbols">
      <span className="tech-symbol tech-symbol-one">{"{ }"}</span>
      <span className="tech-symbol tech-symbol-two">{"< >"}</span>
      <span className="tech-symbol tech-symbol-three">{"/"}</span>
    </div>
  );
}

export function InteractiveBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const section = root?.parentElement;
    const finePointer = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !section || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        root.style.setProperty("--hero-shift-far-x", `${x * 6}px`);
        root.style.setProperty("--hero-shift-far-y", `${y * 4}px`);
        root.style.setProperty("--hero-shift-near-x", `${x * 14}px`);
        root.style.setProperty("--hero-shift-near-y", `${y * 10}px`);
        root.style.setProperty("--hero-pointer-x", `${event.clientX - bounds.left}px`);
        root.style.setProperty("--hero-pointer-y", `${event.clientY - bounds.top}px`);
      });
    };

    const reset = () => {
      root.style.removeProperty("--hero-shift-far-x");
      root.style.removeProperty("--hero-shift-far-y");
      root.style.removeProperty("--hero-shift-near-x");
      root.style.removeProperty("--hero-shift-near-y");
      root.style.removeProperty("--hero-pointer-x");
      root.style.removeProperty("--hero-pointer-y");
    };

    section.addEventListener("pointermove", move, { passive: true });
    section.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="interactive-background">
      <span className="hero-background-grid" />
      <FloatingGlows />
      <span className="interactive-background-pointer" />
      <RisingParticles />
      <AbstractGeometry />
      <TechSymbols />
      <LightPoints />
      <span className="hero-background-legibility-mask" />
    </div>
  );
}
