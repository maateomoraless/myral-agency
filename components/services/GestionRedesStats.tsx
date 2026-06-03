"use client";

import { AnimatedStatsGrid, type AnimatedStatItem } from "@/components/effects/AnimatedCounter";

const stats: AnimatedStatItem[] = [
  {
    label: "Crecimiento medio de seguidores",
    target: 900,
    duration: 2000,
    format: (n: number) => `+${Math.round(n)}%`,
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Alcance mensual medio",
    target: 85,
    duration: 1800,
    format: (n: number) => `${Math.round(n)}K`,
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Más reservas o ventas",
    target: 3,
    duration: 1500,
    format: (n: number) => `${Math.round(n)}×`,
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]",
  },
];

export default function GestionRedesStats() {
  return (
    <AnimatedStatsGrid
      items={stats}
      gridClassName="mb-12 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3"
      cellClassName="bg-[var(--bg)] p-8 md:p-10"
    />
  );
}
