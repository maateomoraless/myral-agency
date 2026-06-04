"use client";

import { useInViewOnce } from "@/components/effects/AnimatedCounter";

const colors = [
  {
    circleClass: "bg-[#F5E614]",
    hex: "#F5E614",
    hexClass: "text-[11px] text-[var(--muted)]",
    label: "Amarillo MYRAL",
    labelClass: "text-[9px] uppercase tracking-[0.14em] text-[#f0ede8]",
  },
  {
    circleClass: "border border-[#333] bg-[#05050b]",
    hex: "#05050b",
    hexClass: "text-[11px] text-[var(--muted)]",
    label: "Negro base",
    labelClass: "text-[9px] uppercase tracking-[0.14em] text-[#f0ede8]",
  },
  {
    circleClass: "bg-[#f0ede8]",
    hex: "#f0ede8",
    hexClass: "text-[11px] text-[var(--muted)]",
    label: "Blanco cálido",
    labelClass: "text-[9px] uppercase tracking-[0.14em] text-[#f0ede8]",
  },
] as const;

export default function BrandingColorCircles() {
  const { ref, active } = useInViewOnce();

  return (
    <div
      ref={ref}
      className="flex flex-wrap items-start justify-center gap-10 md:justify-end"
    >
      {colors.map((color, i) => (
        <div key={color.hex} className="flex flex-col items-center">
          <div
            className={`h-[120px] w-[120px] rounded-full ${color.circleClass} ${
              active ? "branding-color-circle-active" : "scale-0"
            }`}
            style={{
              animationDelay: active ? `${i * 0.1}s` : "0s",
            }}
          />
          <p className={`mt-3 ${color.hexClass}`}>{color.hex}</p>
          <p className={color.labelClass}>{color.label}</p>
        </div>
      ))}
    </div>
  );
}
