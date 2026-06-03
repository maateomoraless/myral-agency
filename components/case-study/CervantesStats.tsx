"use client";

import { AnimatedStatsGrid } from "@/components/effects/AnimatedCounter";

const formatWithDots = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const formatFollowers = (n: number) => `200 → ${formatWithDots(n)}`;
const formatPercent = (n: number) => `+${Math.round(n)}%`;
const formatK = (n: number) => `${Math.round(n)}K`;

const VALUE_CLASS =
  "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614] whitespace-nowrap";
const VALUE_STYLE = { fontSize: "clamp(48px, 6vw, 72px)" };

const STAT_DIVIDER = "md:border-r md:border-[rgba(240,237,232,0.07)]";

const stats = [
  {
    label: "Seguidores en 12 meses",
    target: 2000,
    format: formatFollowers,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
    cellClassName: `${STAT_DIVIDER} md:pr-8`,
  },
  {
    label: "Crecimiento",
    target: 900,
    format: formatPercent,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
    cellClassName: `${STAT_DIVIDER} md:px-8`,
  },
  {
    label: "Alcance mensual",
    target: 85,
    format: formatK,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
    cellClassName: "md:pl-8",
  },
];

export default function CervantesStats() {
  return (
    <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-20 md:px-[52px]">
      <AnimatedStatsGrid
        items={stats}
        gridClassName="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch"
        cellClassName="flex flex-col items-center bg-[#05050b] py-8 text-center md:py-10"
        valueContainerClassName="flex w-full flex-1 items-center justify-center"
      />
    </section>
  );
}
