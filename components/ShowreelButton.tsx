"use client";

import { useEffect, useRef, useState } from "react";

export default function ShowreelButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    videoRef.current?.play().catch(() => {});
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group inline-flex items-center gap-3 bg-[#F5E614] px-7 py-3.5 text-[9px] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[1.03] ${className}`}
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-[7px] text-[#F5E614]">▶</span>
        Ver showreel
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Showreel MYRAL"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-10 text-[10px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#F5E614]"
          >
            Cerrar ✕
          </button>
          <video
            ref={videoRef}
            src="/hero/showreel.mp4"
            poster="/hero/hero-poster.jpg"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-[1400px] bg-black"
          />
        </div>
      )}
    </>
  );
}
