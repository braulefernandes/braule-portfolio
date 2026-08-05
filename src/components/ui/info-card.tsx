import type { ReactNode } from "react";
import { InteractiveGlow } from "./interactive-glow";

interface InfoCardProps {
  label: string;
  children: ReactNode;
  className?: string;
  active?: boolean;
}

export function InfoCard({ label, children, className = "", active = false }: InfoCardProps) {
  return (
    <div className={`interactive-surface group rounded-xl border border-border bg-surface p-5 transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-primary ${className}`}>
      <InteractiveGlow />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
      <div className="mt-2 flex items-start gap-2 text-sm font-semibold leading-6 text-foreground">
        {active ? <span aria-hidden="true" className="availability-dot mt-2 size-2 shrink-0 rounded-full bg-success" /> : null}
        <span>{children}</span>
      </div>
    </div>
  );
}
