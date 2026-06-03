"use client";

import { useInViewOnce } from "@/components/effects/AnimatedCounter";

const metrics = [
  { label: "Alcance", value: 78 },
  { label: "CTR", value: 65 },
  { label: "Conversiones", value: 82 },
  { label: "ROAS", value: 91 },
] as const;

export default function LiveCampaignDashboard() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="rounded-xl border border-[#222] bg-[#0a0a0a] p-6">
      <div className="mb-6 flex items-center gap-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840] [animation:pulse_2s_ease-in-out_infinite]" />
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">Campaña activa</span>
      </div>

      <div className="space-y-5">
        {metrics.map(({ label, value }) => (
          <div key={label}>
            <div className="mb-2 flex items-center justify-between text-[13px] text-white">
              <span>{label}</span>
              <span className="font-[var(--font-syne)] font-bold tabular-nums text-[#F5E614]">{value}%</span>
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

      <p className="mt-6 text-[10px] text-[var(--muted)]">Actualizado en tiempo real</p>
    </div>
  );
}
