"use client";

import { AnimatedStatsGrid, type AnimatedStatItem } from "@/components/effects/AnimatedCounter";

const VALUE_CLASS =
  "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]";
const VALUE_STYLE = { fontSize: "clamp(48px, 6vw, 72px)" };

const stats: AnimatedStatItem[] = [
  {
    label: "Asistentes en un solo evento",
    target: 16000,
    duration: 2000,
    format: (n: number) =>
      Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
  {
    label: "Aforo Leyendas del Vallenato",
    target: 2500,
    duration: 2000,
    format: (n: number) =>
      Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
  {
    label: "Tasa de conversión vs 2-3% industria",
    target: 25,
    duration: 1800,
    format: (n: number) => `${Math.round(n)}%`,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
];

export default function GestionEventosStats() {
  return (
    <AnimatedStatsGrid
      items={stats}
      gridClassName="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3"
      cellClassName="flex flex-col items-center bg-[#05050b] px-6 py-10 text-center md:px-8 md:py-12"
      valueContainerClassName=""
    />
  );
}
