"use client";

import { AnimatedStatsGrid, type AnimatedStatItem } from "@/components/effects/AnimatedCounter";

const VALUE_CLASS =
  "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]";
const VALUE_STYLE = { fontSize: "clamp(48px, 6vw, 72px)" };

const stats: AnimatedStatItem[] = [
  {
    label: "Seguidores del mayor influencer gestionado",
    target: 300,
    duration: 2000,
    format: (n: number) => `${Math.round(n)}K+`,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
  {
    label: "Mundial — deportista patrocinada",
    staticValue: "Top 20",
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
  {
    label: "Colaboraciones de marca activas",
    target: 5,
    duration: 1500,
    format: (n: number) => `+${Math.round(n)}`,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  },
];

export default function InfluencerMarketingStats() {
  return (
    <AnimatedStatsGrid
      items={stats}
      gridClassName="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3"
      cellClassName="flex flex-col items-center bg-[#07070f] px-6 py-10 text-center md:px-8 md:py-12"
    />
  );
}
