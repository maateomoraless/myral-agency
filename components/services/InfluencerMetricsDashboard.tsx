"use client";

import { CounterValue, useInViewOnce } from "@/components/effects/AnimatedCounter";

const metrics = [
  { label: "Engagement rate medio", value: 72 },
  { label: "Alcance orgánico", value: 85 },
  { label: "Conversión a seguidores", value: 61 },
  { label: "Satisfacción de marca", value: 94 },
] as const;

export default function InfluencerMetricsDashboard() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="rounded-xl border border-[#222] bg-[#0a0a0a] p-8">
      <div className="space-y-5">
        {metrics.map(({ label, value }) => (
          <div key={label}>
            <div className="mb-2 flex items-center justify-between text-[13px] text-white">
              <span>{label}</span>
              <CounterValue
                active={active}
                target={value}
                duration={1500}
                format={(n) => `${Math.round(n)}%`}
                className="font-[var(--font-syne)] font-bold tabular-nums text-[#F5E614]"
              />
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#222]">
              <div
                className="h-full rounded-full bg-[#F5E614] transition-[width] duration-[1500ms] ease-out"
                style={{ width: active ? `${value}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[10px] text-[var(--muted)]">
        Métricas medias de campañas gestionadas por MYRAL
      </p>
    </div>
  );
}
