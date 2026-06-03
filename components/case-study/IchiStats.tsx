"use client";

import { AnimatedStatsGrid } from "@/components/effects/AnimatedCounter";

const formatTop = (n: number) => `Top ${Math.round(n)}`;

const stats = [
  {
    label: "Ranking mundial",
    target: 20,
    format: formatTop,
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: { fontSize: "clamp(48px, 6vw, 72px)" },
  },
  {
    label: "IFSC Competiciones",
    staticValue: "Copa del Mundo",
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: { fontSize: "clamp(32px, 4vw, 52px)" },
  },
  {
    label: "Nacional Española",
    staticValue: "Selección",
    valueClassName: "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]",
    valueStyle: { fontSize: "clamp(48px, 6vw, 72px)" },
  },
];

export default function IchiStats() {
  return (
    <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-20 md:px-[52px]">
      <AnimatedStatsGrid items={stats} />
    </section>
  );
}
