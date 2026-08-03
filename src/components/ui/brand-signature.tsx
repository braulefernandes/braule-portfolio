import { personalInfo } from "@/data/personal-info";

type BrandSignatureVariant = "header" | "hero" | "footer" | "compact";

interface BrandSignatureProps {
  variant?: BrandSignatureVariant;
  animated?: boolean;
  decorative?: boolean;
  className?: string;
}

export function BrandSignature({
  variant = "header",
  animated = true,
  decorative = false,
  className = "",
}: BrandSignatureProps) {
  const signature = variant === "compact" ? personalInfo.compactSignature : personalInfo.visualSignature;

  return (
    <span
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : personalInfo.name}
      role={decorative ? undefined : "img"}
      className={`brand-signature brand-signature-${variant} ${animated ? "brand-signature-animated" : ""} ${className}`}
    >
      <span aria-hidden="true" className="brand-signature-symbol">&lt;</span>
      <span aria-hidden="true" className="brand-signature-name">{signature}</span>
      <span aria-hidden="true" className="brand-signature-closing"> /&gt;</span>
    </span>
  );
}
