"use client";

import { AnimatedStatsGrid } from "@/components/effects/AnimatedCounter";

const stats = [
  {
    label: "Proyectos activos",
    target: 20,
    duration: 1500,
    format: (n: number) => `${Math.round(n)}+`,
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Crecimiento medio en redes",
    target: 900,
    duration: 2000,
    format: (n: number) => `+${Math.round(n)}%`,
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Asistentes en un solo evento",
    target: 16000,
    duration: 2000,
    format: (n: number) =>
      Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]",
  },
];

export default function AnimatedStats() {
  return (
    <section className="section-pad reveal-section">
      <AnimatedStatsGrid
        items={stats}
        cellClassName="bg-[var(--bg)] p-8 md:p-10"
      />
    </section>
  );
}
