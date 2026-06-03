"use client";

import { AnimatedStatStack } from "@/components/effects/AnimatedCounter";

const statSize = { fontSize: "clamp(48px, 6vw, 80px)" };

const formatKPlus = (n: number) => `${Math.round(n)}K+`;
const formatTopOne = (n: number) => `Top ${Math.max(1, Math.round(n))}`;

const stats = [
  {
    label: "Impresiones orgánicas",
    target: 300,
    format: formatKPlus,
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: statSize,
  },
  {
    label: "Publicación del mes",
    target: 1,
    format: formatTopOne,
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: statSize,
  },
];

export default function BarrulResultsStats() {
  return <AnimatedStatStack items={stats} />;
}
