export default function LeonMarinoLocation() {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[#222] bg-[#07070f] p-10 text-center">
      <p className="font-[var(--font-syne)] text-[32px] font-extrabold leading-none text-[#F5E614]">TARIFA</p>
      <p className="mt-2 font-[var(--font-syne)] text-[16px] font-normal text-white/60">España</p>
      <div className="my-6 h-0.5 w-10 bg-[#F5E614]" />
      <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]">Estrecho de Gibraltar</p>
      <span className="relative mt-6 flex h-2 w-2 items-center justify-center">
        <span className="absolute h-4 w-4 animate-pulse rounded-full bg-[#F5E614]/25" />
        <span className="relative h-2 w-2 rounded-full bg-[#F5E614]" />
      </span>
      <p className="mt-6 text-[12px] text-[var(--muted)]">36°0′N 5°36′O</p>
    </div>
  );
}
