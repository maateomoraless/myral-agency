"use client";

import { AnimatedStatsGrid, type AnimatedStatItem } from "@/components/effects/AnimatedCounter";

export default function CaseStudyResultsStats({
  items,
  className = "mb-8",
}: {
  items: AnimatedStatItem[];
  className?: string;
}) {
  return (
    <AnimatedStatsGrid
      items={items}
      wrapperClassName={className}
      gridClassName="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3"
      cellClassName="bg-[var(--bg)] p-6 md:p-8"
      valueContainerClassName=""
    />
  );
}
