import type { ProjectVisual as ProjectVisualType } from "@/types";

interface ProjectVisualProps {
  visual: ProjectVisualType;
  variant?: "featured" | "compact";
}

export function ProjectVisual({ visual, variant = "featured" }: ProjectVisualProps) {
  return (
    <div className={`project-visual project-visual-${visual} project-visual-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 480 220" className="h-full w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`visual-gradient-${visual}`} x1="70" y1="35" x2="410" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--accent-bright)" />
          </linearGradient>
        </defs>

        {visual === "route" ? (
          <>
            <path className="visual-route-path" d="M52 168C120 168 103 62 191 62s75 101 166 101c37 0 54-22 70-50" stroke={`url(#visual-gradient-${visual})`} strokeWidth="3" strokeDasharray="8 9" />
            <path className="visual-route-signal" d="M52 168C120 168 103 62 191 62s75 101 166 101c37 0 54-22 70-50" pathLength="1" />
            <circle className="visual-node visual-node-one" cx="52" cy="168" r="8" fill="var(--primary)" />
            <circle className="visual-node visual-node-two" cx="191" cy="62" r="8" fill="var(--accent-bright)" />
            <circle className="visual-route-pin-halo" cx="427" cy="109" r="15" fill="var(--projects-aurora-cyan)" />
            <g className="visual-route-pin">
              <path d="M427 89c-9.4 0-17 7.6-17 17 0 11.7 17 27 17 27s17-15.3 17-27c0-9.4-7.6-17-17-17Z" fill="var(--surface)" stroke="var(--accent-bright)" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="427" cy="106" r="4.5" fill="var(--primary)" stroke="var(--accent-bright)" strokeWidth="2" />
            </g>
          </>
        ) : null}

        {visual === "tasks" ? (
          <>
            {[52, 112, 172].map((y, index) => (
              <g key={y} className={`visual-task visual-task-${index + 1}`}>
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
            <path className="visual-network-lines" d="m82 130 84-71 74 61 82-71 76 105M82 130l95 47 63-57 158 34M166 59l11 118M322 49l-82 71" stroke="var(--border)" strokeWidth="2" />
            <path className="visual-network-signal" d="M82 130 166 59 240 120 398 154" pathLength="1" />
            {[
              [82, 130], [166, 59], [177, 177], [240, 120], [322, 49], [398, 154],
            ].map(([x, y], index) => (
              <circle className={`visual-network-node visual-network-node-${index + 1}`} key={`${x}-${y}`} cx={x} cy={y} r={index === 3 ? 12 : 8} fill={index === 3 ? `url(#visual-gradient-${visual})` : "var(--surface)"} stroke={index === 3 ? "var(--accent-bright)" : "var(--primary)"} strokeWidth="3" />
            ))}
          </>
        ) : null}

        {visual === "detection" ? (
          <>
            <path className="visual-detection-corners" d="M88 65V38h29M363 38h29v27M392 157v27h-29M117 184H88v-27" stroke={`url(#visual-gradient-${visual})`} strokeWidth="4" strokeLinecap="round" />
            <rect className="visual-detection-box" x="171" y="51" width="140" height="130" rx="8" stroke="var(--accent-bright)" strokeWidth="2" strokeDasharray="7 7" />
            <path className="visual-detection-scan" d="M171 66h140" />
            <path d="m220 146 21-70 21 70M207 146h68M215 119h52" stroke="var(--primary)" strokeWidth="5" strokeLinejoin="round" />
            <circle cx="241" cy="111" r="79" stroke="var(--border)" />
          </>
        ) : null}
      </svg>
    </div>
  );
}
