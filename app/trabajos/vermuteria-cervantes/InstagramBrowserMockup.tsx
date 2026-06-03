export default function InstagramBrowserMockup({
  imageSrc,
  label,
  followers,
}: {
  imageSrc: string;
  label: string;
  followers: string;
}) {
  return (
    <div className="flex w-full flex-col">
      <span className="mb-5 inline-block w-fit border border-[#F5E614]/30 bg-[#F5E614]/15 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-[#F5E614]">
        {label}
      </span>

      <div className="relative flex w-full flex-col items-center transition-transform duration-500 ease-out hover:z-10 hover:scale-105">
        <div
          className="flex w-full flex-col overflow-hidden rounded-lg border-[3px] border-[#333] bg-[#111] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          style={{ aspectRatio: "16 / 10" }}
        >
          <div className="flex h-8 shrink-0 items-center gap-3 bg-[#1e1e1e] px-3">
            <div className="flex shrink-0 items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex min-w-0 flex-1 justify-center">
              <span className="truncate rounded bg-[#2a2a2a] px-3 py-1 text-xs text-gray-400">
                instagram.com/cervantes10vermuteria
              </span>
            </div>
            <div className="w-[52px] shrink-0" aria-hidden />
          </div>

          <div className="h-full w-full flex-1 overflow-hidden">
            <img
              src={imageSrc}
              alt={label}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="h-5 w-[40%] rounded-b-[4px] bg-[#222]" />
        <div className="h-2 w-[55%] rounded bg-[#1a1a1a]" />
      </div>

      <p className="mt-5 text-center text-xs text-[var(--muted)]">{followers}</p>
    </div>
  );
}
