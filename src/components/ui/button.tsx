import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground shadow-[0_8px_28px_var(--shadow)] hover:bg-primary-hover",
  secondary: "border border-border bg-surface text-foreground hover:bg-surface-elevated",
  ghost: "bg-transparent text-muted hover:bg-surface hover:text-foreground",
  icon: "size-11 bg-transparent p-0 text-muted hover:bg-surface hover:text-foreground",
};

export function buttonStyles(variant: ButtonVariant = "primary", className = "") {
  return `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-[background-color,border-color,color,transform] active:scale-[0.98] ${variants[variant]} ${className}`;
}

export function Button({
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${buttonStyles(variant, className)} disabled:cursor-not-allowed disabled:opacity-50`}
      {...props}
    />
  );
}
