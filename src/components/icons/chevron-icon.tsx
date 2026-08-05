type ChevronDirection = "right" | "left" | "up" | "down" | "up-right" | "down-right";

interface ChevronIconProps {
  direction?: ChevronDirection;
  className?: string;
  decorative?: boolean;
  label?: string;
}

const directionRotation: Record<ChevronDirection, number> = {
  right: 0,
  left: 180,
  up: -90,
  down: 90,
  "up-right": -45,
  "down-right": 45,
};

export function ChevronIcon({
  direction = "right",
  className = "",
  decorative = true,
  label,
}: ChevronIconProps) {
  const rotation = directionRotation[direction];

  return (
    <svg
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : "img"}
      focusable="false"
      viewBox="0 0 24 24"
      className={`chevron-icon size-4 ${className}`}
      data-direction={direction}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" transform={rotation ? `rotate(${rotation} 12 12)` : undefined} />
    </svg>
  );
}
