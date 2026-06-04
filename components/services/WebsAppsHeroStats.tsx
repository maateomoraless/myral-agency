"use client";

import { CounterValue, useInViewOnce } from "@/components/effects/AnimatedCounter";

const stats = [
  {
    label: "PageSpeed score",
    target: 100,
    duration: 2000,
    format: (n: number) => String(Math.round(n)),
  },
  {
    label: "Tiempo de carga",
    static: "<1s",
  },
  {
    label: "Integrada desde el primer día",
    static: "IA",
  },
] as const;

const valueClass =
  "font-[var(--font-syne)] text-[clamp(28px,4vw,40px)] font-extrabold leading-none text-[#F5E614]";

export default function WebsAppsHeroStats() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="mt-12 flex flex-wrap gap-10 md:gap-16">
      {stats.map((item) => (
        <div key={item.label}>
          {"static" in item ? (
            <div className={valueClass}>{item.static}</div>
          ) : (
            <CounterValue
              active={active}
              target={item.target}
              duration={item.duration}
              format={item.format}
              className={valueClass}
            />
          )}
          <div className="mt-2 max-w-[180px] text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
