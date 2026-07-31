"use client";

import { motion, useReducedMotion } from "motion/react";
import type { AriaRole, ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  role?: AriaRole;
}

export function Reveal({ children, className = "", delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroEntrance({ children, className = "" }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGrid({ children, className = "", role }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      role={role}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "", role }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      role={role}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SubtleFloat({ children, className = "" }: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, 0.4, 0] }}
      transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
