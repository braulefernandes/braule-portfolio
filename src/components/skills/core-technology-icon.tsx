import type { CoreTechnologyVisual } from "@/types";

export function CoreTechnologyIcon({ visual }: { visual: CoreTechnologyVisual }) {
  if (visual === "react") {
    return (
      <svg viewBox="0 0 72 72">
        <g className="core-react-orbits"><ellipse cx="36" cy="36" rx="27" ry="10" /><ellipse cx="36" cy="36" rx="27" ry="10" transform="rotate(60 36 36)" /><ellipse cx="36" cy="36" rx="27" ry="10" transform="rotate(120 36 36)" /></g>
        <circle className="core-react-nucleus" cx="36" cy="36" r="4" /><circle className="core-react-dot" cx="63" cy="36" r="2.5" />
      </svg>
    );
  }

  if (visual === "next") {
    return (
      <svg viewBox="0 0 72 72">
        <circle className="core-next-ring" cx="36" cy="36" r="27" />
        <path className="core-next-mark" d="M22 48V24l27 35M49 24v24" />
        <path className="core-next-cut" d="m42 24 8 8" />
      </svg>
    );
  }

  if (visual === "python") {
    return (
      <svg viewBox="0 0 72 72">
        <path className="core-python-shape core-python-shape-a" d="M35 10c-13 0-16 5-16 13v7h18v4H13c-8 0-11 6-11 14s4 14 12 14h7v-10c0-8 6-14 14-14h13c7 0 12-5 12-12v-4c0-8-6-12-14-12Z" />
        <path className="core-python-shape core-python-shape-b" d="M37 62c13 0 16-5 16-13v-7H35v-4h24c8 0 11-6 11-14S66 10 58 10h-7v10c0 8-6 14-14 14H24c-7 0-12 5-12 12v4c0 8 6 12 14 12Z" />
        <circle className="core-python-eye core-python-eye-a" cx="28" cy="20" r="2" /><circle className="core-python-eye core-python-eye-b" cx="44" cy="52" r="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 72 72">
      <circle className="core-fastapi-disc" cx="36" cy="36" r="27" />
      <path className="core-fastapi-bolt" d="M39 14 22 39h13l-3 19 18-29H37Z" />
      <circle className="core-fastapi-pulse" cx="36" cy="36" r="27" />
    </svg>
  );
}
