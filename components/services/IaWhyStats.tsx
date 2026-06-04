"use client";

import { AnimatedStatsGrid, type AnimatedStatItem } from "@/components/effects/AnimatedCounter";

const VALUE_CLASS =
  "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]";
const VALUE_STYLE = { fontSize: "clamp(48px, 6vw, 72px)" };

const stats: AnimatedStatItem[] = [
  {
    label: "Menos probabilidades de convertir si el lead espera más de 5 minutos",
    target: 80,
    duration: 2000,
    format: (n: number) => `${Math.round(n)}%`,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
  {
    label: "Del tiempo en agencias se gasta en tareas repetitivas automatizables",
    target: 72,
    duration: 2000,
    format: (n: number) => `${Math.round(n)}%`,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
  {
    label: "Más resultados con los mismos recursos aplicando automatización",
    target: 3,
    duration: 1500,
    format: (n: number) => `${Math.round(n)}×`,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
];

export default function IaWhyStats() {
  return (
    <AnimatedStatsGrid
      items={stats}
      gridClassName="mt-12 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3"
      cellClassName="bg-[#07070f] p-8 md:p-10"
    />
  );
}
