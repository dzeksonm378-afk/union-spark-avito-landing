import { brand } from "@/data/landingContent";

type BrandLogoProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function BrandLogo({ compact = false, inverted = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3" aria-label={`${brand.name}, ${brand.descriptor}`}>
      <svg
        className={compact ? "h-9 w-9 shrink-0" : "h-11 w-11 shrink-0"}
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="23"
          fill={inverted ? "#ffffff" : "#111111"}
        />
        <text
          x="24"
          y="24.5"
          dominantBaseline="middle"
          fill={inverted ? "#111111" : "#ffffff"}
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="15"
          fontWeight="700"
          textAnchor="middle"
        >
          {brand.monogram}
        </text>
      </svg>

      <div className={compact ? "leading-tight" : "leading-tight"}>
        <p
          className={`text-sm font-semibold uppercase tracking-normal ${
            inverted ? "text-white" : "text-ink"
          }`}
        >
          {brand.name} |
        </p>
        <p className={`mt-0.5 text-xs ${inverted ? "text-white/65" : "text-graphite"}`}>
          {brand.descriptor}
        </p>
      </div>
    </div>
  );
}
