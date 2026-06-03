"use client";

import { CounterValue, useInViewOnce } from "@/components/effects/AnimatedCounter";

const stats = [
  {
    label: "Proyectos activos",
    target: 20,
    duration: 1500,
    format: (n: number) => `${Math.round(n)}+`,
  },
  {
    label: "Crecimiento medio en redes",
    target: 900,
    duration: 2000,
    format: (n: number) => `+${Math.round(n)}%`,
  },
  {
    label: "Asistentes en un solo evento",
    target: 16000,
    duration: 2000,
    format: (n: number) =>
      Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  },
] as const;

export default function HeroMiniStats() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="flex gap-9">
      {stats.map((item) => (
        <div key={item.label}>
          <CounterValue
            active={active}
            target={item.target}
            duration={item.duration}
            format={item.format}
            className="font-[var(--font-syne)] text-[28px] font-bold leading-none text-white"
          />
          <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/25">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
