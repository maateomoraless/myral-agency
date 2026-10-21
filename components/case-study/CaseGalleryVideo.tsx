"use client";

import { useEffect, useRef } from "react";

/** Vídeo de galería: se reproduce solo cuando está en pantalla. */
export default function CaseGalleryVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="group relative overflow-hidden bg-[#0a0a0a]">
      <video
        ref={ref}
        className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
      />
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 text-[9px] uppercase tracking-[0.22em] text-white/80">
        {label}
      </figcaption>
    </figure>
  );
}
