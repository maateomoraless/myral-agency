"use client";

import { AnimatedStatsGrid, type AnimatedStatItem } from "@/components/effects/AnimatedCounter";

const stats: AnimatedStatItem[] = [
  {
    label: "aforo completo",
    target: 2500,
    duration: 2000,
    format: (n: number) =>
      `${Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pax`,
    valueClassName: "font-[var(--font-syne)] text-4xl font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "tasa de conversión vs 2-3% industria",
    target: 25,
    duration: 1800,
    format: (n: number) => `${Math.round(n)}%`,
    valueClassName: "font-[var(--font-syne)] text-4xl font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "red territorial",
    staticValue: "3 nodos",
    valueClassName: "font-[var(--font-syne)] text-4xl font-extrabold leading-none text-[#F5E614]",
  },
];

export default function LeyendasResultsStats() {
  return (
    <AnimatedStatsGrid
      items={stats}
      gridClassName="mb-8 grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3"
      cellClassName="bg-[var(--bg)] p-6"
    />
  );
}
