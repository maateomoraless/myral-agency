const metrics = [
  { value: "45.2K", label: "Alcance" },
  { value: "128K", label: "Impresiones" },
  { value: "3.847", label: "Clics" },
  { value: "3.2×", label: "ROAS" },
] as const;

const bars = [42, 68, 55, 82, 48, 74, 90, 58, 76, 65] as const;

export default function MetaAdsDashboardMockup() {
  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="flex w-full max-w-[640px] flex-col overflow-hidden rounded-lg border-[3px] border-[#333] bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        style={{ aspectRatio: "16 / 10" }}
      >
        <div className="flex h-9 shrink-0 items-center gap-3 bg-[#1e1e1e] px-3">
          <div className="flex shrink-0 items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center font-[var(--font-syne)] text-[11px] font-bold text-white">
            Meta Business Suite
          </span>
          <div className="w-[52px] shrink-0" aria-hidden />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 md:p-4">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {metrics.map(({ value, label }) => (
              <div key={label} className="rounded border border-[#222] bg-[#111] px-2 py-2 md:px-3 md:py-3">
                <div
                  className="font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]"
                  style={{ fontSize: "clamp(14px, 2vw, 22px)" }}
                >
                  {value}
                </div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[var(--muted)] md:text-[9px]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex min-h-0 flex-1 flex-col rounded border border-[#222] bg-[#111] p-3 md:p-4">
            <p className="mb-3 text-[8px] uppercase tracking-[0.14em] text-[var(--muted)] md:text-[9px]">
              Rendimiento semanal
            </p>
            <div className="flex min-h-0 flex-1 items-end gap-1.5 md:gap-2">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-1 rounded-sm bg-[#F5E614]"
                  style={{ height: `${height}%`, opacity: 0.25 + (height / 100) * 0.75 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-5 w-[40%] rounded-b-[4px] bg-[#222]" />
      <div className="h-2 w-[55%] rounded bg-[#1a1a1a]" />
    </div>
  );
}
