"use client";

import { AnimatedStatsGrid, type AnimatedStatItem } from "@/components/effects/AnimatedCounter";
import type { CaseStat } from "@/lib/cases";

const dots = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const VALUE_CLASS = "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614] whitespace-nowrap";
const VALUE_STYLE = { fontSize: "clamp(40px, 5vw, 64px)" };

export default function CaseImpactStats({ stats }: { stats: CaseStat[] }) {
  const items: AnimatedStatItem[] = stats.map((s) => ({
    label: s.label,
    target: s.value,
    format: (n: number) => `${s.prefix ?? ""}${dots(n)}${s.suffix ?? ""}`,
    valueClassName: VALUE_CLASS,
    valueStyle: VALUE_STYLE,
  }));
  const cols = stats.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-16 md:px-[52px]">
      <AnimatedStatsGrid
        items={items}
        gridClassName={`grid grid-cols-2 gap-px bg-[var(--border)] ${cols}`}
        cellClassName="bg-[#05050b] px-4 py-8 md:px-8 md:py-10"
      />
    </section>
  );
}
