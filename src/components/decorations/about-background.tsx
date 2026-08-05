export function AboutBackground() {
  return (
    <div className="about-background" aria-hidden="true">
      <span className="about-glow about-glow-primary" />
      <span className="about-glow about-glow-accent" />
      <span className="about-dot-pattern" />
      <span className="about-tech-symbol about-tech-symbol-braces">{"{ }"}</span>
      <span className="about-tech-symbol about-tech-symbol-code">{"</>"}</span>
      <svg className="about-network" viewBox="0 0 720 430" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="about-network-gradient" x1="60" y1="340" x2="660" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--accent-bright)" />
          </linearGradient>
        </defs>
        <g className="about-network-static">
          <path d="M82 324 194 252 310 298 422 194 548 226 654 112" />
          <path d="M194 252 238 124 422 194 486 82 654 112" />
          <path d="M310 298 518 346 548 226" />
        </g>
        <g className="about-network-energy">
          <path d="M82 324 194 252 310 298 422 194 548 226 654 112" />
          <path d="M194 252 238 124 422 194 486 82 654 112" />
        </g>
        <g className="about-network-nodes">
          {[ [82,324], [194,252], [310,298], [422,194], [548,226], [654,112], [238,124], [486,82], [518,346] ].map(([cx, cy], index) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index % 3 === 0 ? 4 : 3} />
          ))}
        </g>
      </svg>
    </div>
  );
}
