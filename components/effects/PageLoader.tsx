"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SESSION_KEY = "myral-intro-seen";
const FONTS = [
  "Georgia, serif",
  "Courier New, monospace",
  "Impact, sans-serif",
  "Arial Black, sans-serif",
  "Syne, sans-serif",
];

/**
 * Intro corta (~2,5 s): letras que aparecen, cambio rápido de tipografías y cierre con el logo real.
 * - Se puede saltar tocando, haciendo click, con scroll o con cualquier tecla.
 * - Solo se muestra una vez por visita (sessionStorage).
 * - Respeta prefers-reduced-motion.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [letters, setLetters] = useState(0);
  const [fontIdx, setFontIdx] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const closing = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const close = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    timers.current.forEach(clearTimeout);
    setFadeOut(true);
    timers.current = [setTimeout(() => setVisible(false), 450)];
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage no disponible: mostramos la intro igualmente */
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) return;

    const at = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));

    at(0, () => setVisible(true));
    for (let i = 1; i <= 5; i++) at(150 + i * 70, () => setLetters(i));
    FONTS.forEach((_, i) => at(650 + i * 110, () => setFontIdx(i)));
    at(1350, () => setShowLogo(true));
    at(2300, close);

    return () => timers.current.forEach(clearTimeout);
  }, [close]);

  useEffect(() => {
    if (!visible) return;
    const skip = () => close();
    const opts = { passive: true } as const;
    window.addEventListener("pointerdown", skip, opts);
    window.addEventListener("touchstart", skip, opts);
    window.addEventListener("wheel", skip, opts);
    window.addEventListener("keydown", skip);
    return () => {
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("touchstart", skip);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [visible, close]);

  if (!visible) return null;

  return (
    <div
      className="page-loader-root"
      role="presentation"
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#05050b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.45s ease",
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative", height: "clamp(48px, 12vw, 96px)", display: "flex", alignItems: "center" }}>
        <div
          aria-hidden
          style={{
            display: "flex",
            alignItems: "baseline",
            fontFamily: FONTS[fontIdx],
            fontWeight: 800,
            fontSize: "clamp(44px, 11vw, 88px)",
            letterSpacing: "-0.02em",
            color: "#f0ede8",
            lineHeight: 1,
            opacity: showLogo ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          {"MYRAL".split("").map((l, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: letters > i ? 1 : 0,
                transform: letters > i ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.12s, transform 0.12s",
              }}
            >
              {l}
            </span>
          ))}
          <span style={{ color: "#F5E614", opacity: letters >= 5 ? 1 : 0 }}>.</span>
        </div>
        <img
          src="/images/logo_myral_sin_fondo.png"
          alt="MYRAL"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            height: "100%",
            width: "auto",
            transform: `translate(-50%, -50%) scale(${showLogo ? 1 : 0.94})`,
            opacity: showLogo ? 1 : 0,
            transition: "opacity 0.4s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
      <span
        style={{
          position: "absolute",
          bottom: 32,
          fontFamily: "DM Sans, sans-serif",
          fontSize: 9,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "rgba(240,237,232,0.35)",
        }}
      >
        Toca para entrar
      </span>
    </div>
  );
}
