export default function WhatNextBrowserMockup() {
  return (
    <div className="flex w-full justify-center lg:justify-end">
      <div
        className="w-full max-w-[520px] overflow-hidden rounded-lg border border-[#333] bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-[transform,box-shadow] duration-500 hover:scale-[1.02] hover:shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="flex h-9 items-center gap-3 bg-[#1e1e1e] px-3">
          <div className="flex shrink-0 items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-1 items-center justify-center rounded bg-[#2a2a2a] px-3 py-1">
            <span className="truncate text-[10px] text-white/50">whatnext-gray.vercel.app</span>
          </div>
          <div className="w-6 shrink-0" aria-hidden />
        </div>

        <div className="flex flex-col items-center px-8 py-12 md:px-10 md:py-14">
          <h3 className="font-[var(--font-syne)] text-[clamp(28px,5vw,36px)] font-bold text-white">
            WhatNext?
          </h3>
          <p className="mt-3 text-center text-[12px] text-white/45">
            Deja de perder tiempo buscando qué ver.
          </p>
          <div className="mt-8 w-full max-w-[280px] space-y-3">
            <input
              type="text"
              readOnly
              value="Email"
              aria-hidden
              tabIndex={-1}
              className="pointer-events-none w-full border border-[#222] bg-[#111] px-4 py-3 text-[12px] text-white/35 outline-none"
            />
            <input
              type="text"
              readOnly
              value="Contraseña"
              aria-hidden
              tabIndex={-1}
              className="pointer-events-none w-full border border-[#222] bg-[#111] px-4 py-3 text-[12px] text-white/35 outline-none"
            />
            <button
              type="button"
              tabIndex={-1}
              className="pointer-events-none w-full bg-white py-3 text-[11px] font-semibold text-black"
            >
              Entrar
            </button>
            <button
              type="button"
              tabIndex={-1}
              className="pointer-events-none w-full border border-white/20 py-3 text-[11px] text-white/70"
            >
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
