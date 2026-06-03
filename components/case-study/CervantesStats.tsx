"use client";

import { AnimatedStatsGrid } from "@/components/effects/AnimatedCounter";

const formatWithDots = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const formatFollowers = (n: number) => `200 → ${formatWithDots(n)}`;
const formatPercent = (n: number) => `+${Math.round(n)}%`;
const formatK = (n: number) => `${Math.round(n)}K`;

const stats = [
  {
    label: "Seguidores en 12 meses",
    target: 2000,
    format: formatFollowers,
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: { fontSize: "clamp(36px, 5vw, 64px)" },
  },
  {
    label: "Crecimiento",
    target: 900,
    format: formatPercent,
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: { fontSize: "clamp(48px, 6vw, 72px)" },
  },
  {
    label: "Alcance mensual",
    target: 85,
    format: formatK,
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: { fontSize: "clamp(48px, 6vw, 72px)" },
  },
];

export default function CervantesStats() {
  return (
    <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-20 md:px-[52px]">
      <AnimatedStatsGrid items={stats} />
    </section>
  );
}
