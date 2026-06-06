"use client";

import { CounterValue, useInViewOnce } from "@/components/effects/AnimatedCounter";

const valueClass =
  "font-[var(--font-syne)] text-[64px] font-extrabold leading-none text-[#F5E614]";

const stats = [
  {
    label: "Locales en Oviedo",
    target: 2,
    format: (n: number) => String(Math.round(n)),
  },
  {
    label: "Seguidores ganados",
    target: 500,
    format: (n: number) => `+${Math.round(n)}`,
  },
  {
    label: "Meses de gestión",
    target: 12,
    format: (n: number) => String(Math.round(n)),
  },
] as const;

export default function ElLocoResultsStats() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="flex flex-col justify-center gap-10">
      {stats.map(({ label, target, format }) => (
        <div key={label}>
          <CounterValue active={active} target={target} format={format} className={valueClass} />
          <div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{label}</div>
        </div>
      ))}
    </div>
  );
}
