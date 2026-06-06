"use client";

import { CounterValue, useInViewOnce } from "@/components/effects/AnimatedCounter";

const valueClass =
  "font-[var(--font-syne)] text-[64px] font-extrabold leading-none text-[#F5E614]";

const stats = [
  {
    label: "Marcas coordinadas",
    target: 2,
    format: (n: number) => String(Math.round(n)),
  },
  {
    label: "Reel de alto impacto",
    target: 1,
    format: (n: number) => String(Math.round(n)),
  },
  {
    label: "Contenido orgánico",
    target: 100,
    format: (n: number) => `${Math.round(n)}%`,
  },
] as const;

export default function RunRunResultsStats() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="flex h-full flex-col justify-center gap-10 sm:flex-row sm:flex-wrap lg:flex-col lg:gap-12">
      {stats.map(({ label, target, format }) => (
        <div key={label}>
          <CounterValue active={active} target={target} format={format} className={valueClass} />
          <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{label}</div>
        </div>
      ))}
    </div>
  );
}
