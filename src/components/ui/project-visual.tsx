import { useTranslations } from "next-intl";

import type { ProjectVisual as ProjectVisualType } from "@/types";

interface ProjectVisualProps {
  visual: ProjectVisualType;
  title: string;
}

export function ProjectVisual({ visual, title }: ProjectVisualProps) {
  const t = useTranslations("Projects");
  return (
    <div className="project-visual" role="img" aria-label={t("visualLabel", { title })}>
      <svg viewBox="0 0 480 220" className="h-full w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`visual-gradient-${visual}`} x1="70" y1="35" x2="410" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--accent-bright)" />
          </linearGradient>
        </defs>

        {visual === "route" ? (
          <>
            <path d="M52 168C120 168 103 62 191 62s75 101 166 101c37 0 54-22 70-50" stroke={`url(#visual-gradient-${visual})`} strokeWidth="3" strokeDasharray="8 9" />
            <circle cx="52" cy="168" r="8" fill="var(--primary)" />
            <circle cx="191" cy="62" r="8" fill="var(--accent-bright)" />
            <path d="m420 92 9 20-20 9 7-11-12-7 5-8 12 7-1-10Z" fill="var(--accent-bright)" />
          </>
        ) : null}

        {visual === "tasks" ? (
          <>
            {[52, 112, 172].map((y, index) => (
              <g key={y}>
                <rect x="78" y={y - 18} width="324" height="42" rx="10" stroke="var(--border)" fill="var(--overlay)" />
                <rect x="96" y={y - 5} width="16" height="16" rx="4" stroke={`url(#visual-gradient-${visual})`} strokeWidth="2" />
                {index < 2 ? <path d={`m100 ${y + 2} 5 5 10-12`} stroke="var(--accent-bright)" strokeWidth="2" /> : null}
                <path d={`M132 ${y + 3}h${index === 1 ? 128 : 184}`} stroke="var(--muted)" strokeWidth="5" strokeLinecap="round" />
              </g>
            ))}
          </>
        ) : null}

        {visual === "network" ? (
          <>
            <path d="m82 130 84-71 74 61 82-71 76 105M82 130l95 47 63-57 158 34M166 59l11 118M322 49l-82 71" stroke="var(--border)" strokeWidth="2" />
            {[
              [82, 130], [166, 59], [177, 177], [240, 120], [322, 49], [398, 154],
            ].map(([x, y], index) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={index === 3 ? 12 : 8} fill={index === 3 ? `url(#visual-gradient-${visual})` : "var(--surface)"} stroke={index === 3 ? "var(--accent-bright)" : "var(--primary)"} strokeWidth="3" />
            ))}
          </>
        ) : null}

        {visual === "detection" ? (
          <>
            <path d="M88 65V38h29M363 38h29v27M392 157v27h-29M117 184H88v-27" stroke={`url(#visual-gradient-${visual})`} strokeWidth="4" strokeLinecap="round" />
            <rect x="171" y="51" width="140" height="130" rx="8" stroke="var(--accent-bright)" strokeWidth="2" strokeDasharray="7 7" />
            <path d="m220 146 21-70 21 70M207 146h68M215 119h52" stroke="var(--primary)" strokeWidth="5" strokeLinejoin="round" />
            <circle cx="241" cy="111" r="79" stroke="var(--border)" />
          </>
        ) : null}
      </svg>
    </div>
  );
}
