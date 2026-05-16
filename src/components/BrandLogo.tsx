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
        <path
          d="M15 14V34H27"
          fill="none"
          stroke={inverted ? "#111111" : "#ffffff"}
          strokeLinecap="square"
          strokeWidth="3"
        />
        <path
          d="M33 15H25C22.7 15 21.2 16.3 21.2 18.2C21.2 20.4 23.1 21.2 26.8 21.9C31.1 22.8 33.7 24.4 33.7 28.1C33.7 31.7 30.8 34 26.4 34H19.5"
          fill="none"
          stroke={inverted ? "#111111" : "#ffffff"}
          strokeLinecap="square"
          strokeWidth="3"
        />
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
