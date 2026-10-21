"use client";

import { useEffect, useRef } from "react";
import type { WorkCard } from "@/lib/works";

const fillClassName = "absolute inset-0 h-full w-full object-cover";

/**
 * Imagen fija + vídeo en bucle.
 * - Escritorio: el vídeo se reproduce al pasar el ratón por la tarjeta.
 * - Táctil: se reproduce cuando la tarjeta está en pantalla.
 */
export default function WorkCardMedia({ work }: { work: WorkCard }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const card = video.closest("a, article") ?? video.parentElement;
    const touch = window.matchMedia("(hover: none)").matches;
    const play = () => {
      video.play().catch(() => {});
      video.style.opacity = "1";
    };
    const stop = () => {
      video.pause();
      video.style.opacity = "0";
    };

    if (touch) {
      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? play() : stop()),
        { threshold: 0.6 },
      );
      io.observe(video);
      return () => io.disconnect();
    }

    card?.addEventListener("mouseenter", play);
    card?.addEventListener("mouseleave", stop);
    return () => {
      card?.removeEventListener("mouseenter", play);
      card?.removeEventListener("mouseleave", stop);
    };
  }, []);

  if (!work.image && !work.video) {
    return (
      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#111] px-4">
        <span className="text-center font-[var(--font-syne)] text-sm font-extrabold uppercase tracking-[0.18em] text-white/[0.15] md:text-base">
          {work.placeholder}
        </span>
      </div>
    );
  }

  return (
    <>
      {work.image && <img src={work.image} alt={work.name} loading="lazy" className={fillClassName} />}
      {work.video && (
        <video
          ref={videoRef}
          className={`${fillClassName} transition-opacity duration-500`}
          style={{ opacity: 0 }}
          src={work.video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
        />
      )}
    </>
  );
}
