"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SESSION_KEY = "myral-intro-seen";

/**
 * Entrada "diafragma": aparece el punto amarillo del logo y se abre como el iris de una cámara.
 * Sale en cada carga de página (más corta si ya la has visto). Se salta con toque, click, scroll o tecla.
 */
export default function PageLoader() {
  const [stage, setStage] = useState<"off" | "dot" | "iris" | "done">("dot");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    timers.current.forEach(clearTimeout);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sin storage */
    }
    setStage("iris");
    timers.current = [setTimeout(() => setStage("done"), 1100)];
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* sin storage */
    }
    const at = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      at(0, () => setStage("done"));
      return () => timers.current.forEach(clearTimeout);
    }
    at(seen ? 700 : 1400, finish);
    return () => timers.current.forEach(clearTimeout);
  }, [finish]);

  useEffect(() => {
    if (stage !== "dot") return;
    const skip = () => finish();
    const o = { passive: true } as const;
    window.addEventListener("pointerdown", skip, o);
    window.addEventListener("wheel", skip, o);
    window.addEventListener("touchmove", skip, o);
    window.addEventListener("keydown", skip);
    return () => {
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [stage, finish]);

  if (stage === "off" || stage === "done") return null;

  return (
    <div className={`studio-intro ${stage === "iris" ? "is-open" : ""}`} aria-hidden>
      <div className="studio-intro__iris" />
      <span className="studio-intro__label mono">MYRAL — reel</span>
    </div>
  );
}
