"use client";

import { CounterValue, useInViewOnce } from "@/components/effects/AnimatedCounter";

const VALUE_CLASS =
  "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]";
const VALUE_STYLE = { fontSize: "clamp(48px, 6vw, 72px)" };

const columns = [
  {
    topLabel: "ROAS medio sector hostelería",
    strikethrough: "1.8×",
    target: 3.2,
    format: (n: number) => `${n.toFixed(1)}×`,
    footnote: "Nuestros clientes",
  },
  {
    topLabel: "CTR medio Meta Ads sector",
    strikethrough: "0.9%",
    target: 2.4,
    format: (n: number) => `${n.toFixed(1)}%`,
    footnote: "Campañas MYRAL",
  },
  {
    topLabel: "Coste por resultado medio",
    strikethrough: "−",
    target: 40,
    format: (n: number) => `−${Math.round(n)}%`,
    footnote: "vs media del sector",
  },
] as const;

export default function PublicidadComparisonStats() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3">
      {columns.map((col) => (
        <div
          key={col.topLabel}
          className="flex flex-col items-center bg-[#07070f] px-6 py-10 text-center md:px-8 md:py-12"
        >
          <p className="text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{col.topLabel}</p>
          <p className="mt-4 font-[var(--font-syne)] text-[clamp(28px,4vw,40px)] font-extrabold leading-none text-white/25 line-through decoration-white/20">
            {col.strikethrough}
          </p>
          <CounterValue
            active={active}
            target={col.target}
            duration={1800}
            format={col.format}
            className={`mt-3 ${VALUE_CLASS}`}
            style={VALUE_STYLE}
          />
          <p className="mt-4 text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">{col.footnote}</p>
        </div>
      ))}
    </div>
  );
}
