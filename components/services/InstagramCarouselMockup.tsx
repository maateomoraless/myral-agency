"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/images/camara-1.jpg",
  "/images/camara-2.jpg",
  "/images/camara-3.jpg",
] as const;

function IconBack() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconDots() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function IconComment() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.4 8.4 0 0 1-8.3-9 8.4 8.4 0 0 1 9-8.3 8.4 8.4 0 0 1 8.3 9z" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function IconHome({ active }: { active?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function IconNavHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function IconProfile() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 6.5-4 8-4s6.5 0 8 4" />
    </svg>
  );
}

export default function InstagramCarouselMockup() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-[280px] min-h-[580px] shrink-0"
      style={{ aspectRatio: "9 / 19.5" }}
    >
      <div className="absolute inset-0 rounded-[2.75rem] border border-white/[0.08] bg-[linear-gradient(165deg,#12121c_0%,#07070f_55%,#05050b_100%)] p-[10px] shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
        <div className="pointer-events-none absolute left-1/2 top-[18px] z-30 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

        <div className="flex h-full flex-col overflow-hidden rounded-[2.25rem] bg-black">
          {/* Header Instagram */}
          <header className="shrink-0 bg-black pt-7">
            <div className="flex items-center justify-between px-3 py-3">
              <span className="text-white">
                <IconBack />
              </span>
              <span className="font-[var(--font-syne)] text-[13px] font-bold text-white">myralagency</span>
              <span className="text-white">
                <IconDots />
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black p-[3px]">
              <img
                src="/images/logo_myral_sin_fondo.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
              <span className="text-[12px] text-white">myralagency</span>
              <button
                type="button"
                tabIndex={-1}
                className="ml-auto rounded-md bg-[#0095F6] px-2.5 py-1 text-[10px] font-semibold text-white"
              >
                Seguir
              </button>
            </div>

            <div className="h-px bg-white/[0.08]" />
          </header>

          <div className="flex min-h-0 flex-1 flex-col bg-black">
            <div className="relative min-h-0 flex-1 overflow-hidden">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                  width: `${SLIDES.length * 100}%`,
                  transform: `translateX(-${(index * 100) / SLIDES.length}%)`,
                }}
              >
                {SLIDES.map((src, i) => (
                  <div
                    key={src}
                    className="relative h-full shrink-0"
                    style={{ width: `${100 / SLIDES.length}%` }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="260px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controles del post */}
            <div className="shrink-0 bg-black px-3 pb-2 pt-2.5">
              <div className="flex items-center gap-3.5 text-white">
                <IconHeart />
                <IconComment />
                <IconShare />
              </div>
              <p className="mt-2 text-[11px] leading-[1.45] text-white">
                <span className="font-[var(--font-syne)] font-bold">myralagency</span>{" "}
                Contenido que convierte. 🎬
              </p>
              <div className="mt-2.5 flex justify-center gap-1.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Foto ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-1.5 bg-white" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Barra inferior */}
          <nav className="flex shrink-0 items-center justify-between border-t border-white/[0.08] bg-black px-5 py-2.5">
            <span className="text-white">
              <IconHome active />
            </span>
            <span className="text-white/35">
              <IconSearch />
            </span>
            <span className="text-white/35">
              <IconPlus />
            </span>
            <span className="text-white/35">
              <IconNavHeart />
            </span>
            <span className="text-white/35">
              <IconProfile />
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
