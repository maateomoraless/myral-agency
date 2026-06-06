"use client";

import { CounterValue, useInViewOnce } from "@/components/effects/AnimatedCounter";

const stats = [
  {
    label: "Reducción del trabajo manual",
    target: 72,
    duration: 2000,
    format: (n: number) => `${Math.round(n)}%`,
  },
  {
    label: "Respuesta automática a leads",
    target: 2,
    duration: 1800,
    format: (n: number) => `<${Math.round(n)} min`,
  },
  {
    label: "Reportes sin intervención humana",
    target: 100,
    duration: 1800,
    format: (n: number) => `${Math.round(n)}%`,
  },
] as const;

const valueClass =
  "font-[var(--font-syne)] text-[clamp(28px,4vw,40px)] font-extrabold leading-none text-[#F5E614]";

export default function IaHeroStats() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="mt-12 flex flex-wrap gap-10 md:gap-16">
      {stats.map((item) => (
        <div key={item.label}>
          <CounterValue
            active={active}
            target={item.target}
            duration={item.duration}
            format={item.format}
            className={valueClass}
          />
          <div className="mt-2 max-w-[180px] text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
