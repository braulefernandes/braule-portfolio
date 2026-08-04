export function SkillsOrbitBackground() {
  return (
    <div aria-hidden="true" className="skills-orbit-background">
      <div className="skills-orbit-glows" />

      <svg
        className="skills-orbit-canvas"
        viewBox="0 0 1440 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skills-orbit-gradient-primary" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--skills-orbit-purple)" stopOpacity="0" />
            <stop offset=".32" stopColor="var(--skills-orbit-purple)" stopOpacity=".58" />
            <stop offset=".68" stopColor="var(--skills-orbit-blue)" stopOpacity=".48" />
            <stop offset="1" stopColor="var(--skills-orbit-cyan)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="skills-orbit-gradient-secondary" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--skills-orbit-blue)" stopOpacity="0" />
            <stop offset=".38" stopColor="var(--skills-orbit-cyan)" stopOpacity=".44" />
            <stop offset=".72" stopColor="var(--skills-orbit-purple)" stopOpacity=".42" />
            <stop offset="1" stopColor="var(--skills-orbit-purple)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="skills-orbit-pulse-glow">
            <stop offset="0" stopColor="var(--skills-orbit-node-core)" />
            <stop offset=".35" stopColor="var(--skills-orbit-node)" stopOpacity=".85" />
            <stop offset="1" stopColor="var(--skills-orbit-node)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="skills-orbit-paths">
          <path id="skills-orbit-path-one" d="M-100 250C190 105 415 170 620 315S1010 470 1540 225" />
          <path id="skills-orbit-path-two" d="M-130 470C225 610 420 350 735 430S1120 665 1540 510" />
          <path id="skills-orbit-path-three" d="M150 0C35 285 335 410 525 555S800 890 660 1130" />
          <path id="skills-orbit-path-four" d="M-110 865C235 710 510 790 755 925S1170 1060 1540 835" />
          <path id="skills-orbit-path-five" d="M760-70C980 150 845 340 1010 520S1340 700 1490 655" />
          <path id="skills-orbit-path-six" d="M-80 1030C260 930 405 1010 630 1045S1110 1010 1510 930" />
        </g>

        <g className="skills-orbit-moving-strokes">
          <path d="M-130 470C225 610 420 350 735 430S1120 665 1540 510" />
          <path d="M-110 865C235 710 510 790 755 925S1170 1060 1540 835" />
        </g>

        <g className="skills-orbit-pulses">
          <circle r="7" fill="url(#skills-orbit-pulse-glow)">
            <animateMotion dur="16s" repeatCount="indefinite" path="M-100 250C190 105 415 170 620 315S1010 470 1540 225" />
          </circle>
          <circle r="6" fill="url(#skills-orbit-pulse-glow)">
            <animateMotion dur="21s" begin="-8s" repeatCount="indefinite" path="M-130 470C225 610 420 350 735 430S1120 665 1540 510" />
          </circle>
          <circle r="7" fill="url(#skills-orbit-pulse-glow)">
            <animateMotion dur="27s" begin="-17s" repeatCount="indefinite" path="M150 0C35 285 335 410 525 555S800 890 660 1130" />
          </circle>
          <circle r="5.5" fill="url(#skills-orbit-pulse-glow)">
            <animateMotion dur="19s" begin="-4s" repeatCount="indefinite" path="M-110 865C235 710 510 790 755 925S1170 1060 1540 835" />
          </circle>
        </g>

        <g className="skills-orbit-nodes">
          <circle cx="185" cy="207" r="3" /><circle cx="620" cy="315" r="3.5" />
          <circle cx="1035" cy="363" r="2.5" /><circle cx="405" cy="434" r="3" />
          <circle cx="525" cy="555" r="2.5" /><circle cx="755" cy="925" r="3.5" />
          <circle cx="1195" cy="991" r="2.5" />
        </g>
      </svg>

      <span className="skills-orbit-fragment skills-orbit-fragment-one" />
      <span className="skills-orbit-fragment skills-orbit-fragment-two" />
      <span className="skills-orbit-fragment skills-orbit-fragment-three" />
      <span className="skills-orbit-fragment skills-orbit-fragment-four" />
      <span className="skills-orbit-fragment skills-orbit-fragment-five" />
    </div>
  );
}
