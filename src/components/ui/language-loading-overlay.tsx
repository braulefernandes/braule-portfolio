interface LanguageLoadingOverlayProps {
  visible: boolean;
  label: string;
}

export function LanguageLoadingOverlay({ visible, label }: LanguageLoadingOverlayProps) {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex cursor-wait items-center justify-center bg-white/35 p-4 backdrop-blur-[2px] dark:bg-zinc-950/45"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/90 px-5 py-4 text-sm font-medium text-foreground shadow-2xl shadow-black/10 dark:shadow-black/30">
        <span
          className="size-5 shrink-0 animate-spin rounded-full border-2 border-primary/25 border-t-primary motion-reduce:animate-pulse"
          aria-hidden="true"
        />
        <span>{label}</span>
      </div>
    </div>
  );
}
