"use client";

import { AnimatedStatStack } from "@/components/effects/AnimatedCounter";

const stats = [
  {
    label: "Asistentes",
    target: 2500,
    duration: 2000,
    format: (n: number) =>
      Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    valueClassName: "font-[var(--font-syne)] text-[48px] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Conversión vs. 2–3% de la industria",
    target: 25,
    duration: 1800,
    format: (n: number) => `${Math.round(n)}%`,
    valueClassName: "font-[var(--font-syne)] text-[48px] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Nodos territoriales",
    staticValue: "3",
    valueClassName: "font-[var(--font-syne)] text-[48px] font-extrabold leading-none text-[#F5E614]",
  },
] as const;

export default function LeyendasCaseStats() {
  return <AnimatedStatStack items={[...stats]} className="space-y-8" />;
}
