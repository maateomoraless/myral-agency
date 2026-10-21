"use client";

/** Filtro SVG de distorsión. warp() lo agita un instante y lo devuelve a cero. */
export function WarpFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <filter id="studio-warp" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence id="studio-warp-noise" type="fractalNoise" baseFrequency="0.008 0.03" numOctaves="2" seed="3" />
        <feDisplacementMap id="studio-warp-map" in="SourceGraphic" scale="0" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

let raf = 0;
export function warp(duration = 900, peak = 70) {
  const map = document.getElementById("studio-warp-map");
  const noise = document.getElementById("studio-warp-noise");
  if (!map) return;
  cancelAnimationFrame(raf);
  const start = performance.now();
  const seed = Math.round(Math.random() * 100);
  noise?.setAttribute("seed", String(seed));
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const v = peak * Math.pow(1 - p, 3);
    map.setAttribute("scale", v.toFixed(1));
    if (p < 1) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
}
