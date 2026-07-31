import type { ReactNode } from "react";

interface InfoCardProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function InfoCard({ label, children, className = "" }: InfoCardProps) {
  return (
    <div className={`group rounded-xl border border-border bg-surface p-5 transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_12px_36px_var(--shadow)] ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
      <div className="mt-2 text-sm font-semibold leading-6 text-foreground">{children}</div>
    </div>
  );
}
