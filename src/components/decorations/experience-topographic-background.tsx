const marks = [
  { label: "PATH / 01", className: "experience-topographic-mark-one" },
  { label: "··· +", className: "experience-topographic-mark-two" },
  { label: "TRACE / ∞", className: "experience-topographic-mark-three" },
  { label: "03 : CONT", className: "experience-topographic-mark-four" },
];

export function ExperienceTopographicBackground() {
  return (
    <div aria-hidden="true" className="experience-topographic-background">
      <svg
        className="experience-topographic-map"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="experience-topographic-violet" x1="40" y1="0" x2="1360" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset=".28" stopColor="#8b5cf6" stopOpacity=".28" />
            <stop offset=".68" stopColor="#3b82f6" stopOpacity=".2" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="experience-topographic-cyan" x1="1390" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" stopOpacity="0" />
            <stop offset=".32" stopColor="#22d3ee" stopOpacity=".22" />
            <stop offset=".72" stopColor="#6366f1" stopOpacity=".18" />
            <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <filter id="experience-topographic-energy-glow" x="-30%" y="-200%" width="160%" height="500%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g className="experience-topographic-lines" stroke="url(#experience-topographic-violet)">
          <path className="topographic-line topographic-line-a" d="M-120 170C95 14 292 40 409 167S648 329 818 215s321-146 518-35 278 31 330-37" />
          <path className="topographic-line topographic-line-b" d="M-92 220C126 73 290 91 394 205s238 169 408 63 341-133 526-26 263 57 310-2" />
          <path className="topographic-line topographic-line-c" d="M-62 282C134 164 284 146 376 246s234 164 399 79 333-102 509-12 266 81 327 31" />
          <path className="topographic-line topographic-line-d" d="M-118 492C96 356 246 378 356 491s236 147 407 50 332-124 520-11 268 73 342 6" />
          <path className="topographic-line topographic-line-e" d="M-88 552C103 444 247 443 343 531s222 141 397 66 333-96 507-3 274 96 358 43" />
          <path className="topographic-line topographic-line-f" d="M-101 742C94 624 255 641 370 746s235 140 394 45 329-116 500-18 278 85 367 20" />
          <path className="topographic-line topographic-line-g" d="M-70 804C105 707 260 700 359 787s221 129 386 52 322-88 487 0 280 109 377 56" />
          <path className="topographic-line topographic-line-h" d="M-128 978C76 850 247 866 360 972s231 140 391 52 326-120 497-22 282 90 382 28" />
          <path className="topographic-line topographic-line-i" d="M-96 1040C94 936 250 929 349 1017s220 130 382 58 317-92 481-7 282 115 384 64" />
          <path className="topographic-line topographic-line-j" d="M178 1139C299 1064 412 1060 498 1115s175 66 284 20 217-44 337 15 191 48 252 18" />
        </g>

        <g className="experience-topographic-energy" stroke="url(#experience-topographic-cyan)" filter="url(#experience-topographic-energy-glow)">
          <path className="topographic-energy topographic-energy-one" pathLength="100" d="M-120 170C95 14 292 40 409 167S648 329 818 215s321-146 518-35 278 31 330-37" />
          <path className="topographic-energy topographic-energy-two" pathLength="100" d="M-101 742C94 624 255 641 370 746s235 140 394 45 329-116 500-18 278 85 367 20" />
          <path className="topographic-energy topographic-energy-three" pathLength="100" d="M-96 1040C94 936 250 929 349 1017s220 130 382 58 317-92 481-7 282 115 384 64" />
        </g>
        <g className="experience-topographic-points">
          <circle cx="168" cy="201" r="2.5" /><circle cx="1278" cy="317" r="2" />
          <circle cx="205" cy="822" r="2" /><circle cx="1190" cy="1019" r="2.5" />
        </g>
      </svg>
      <div className="experience-topographic-marks">
        {marks.map((mark) => <span key={mark.label} className={mark.className}>{mark.label}</span>)}
      </div>
    </div>
  );
}
