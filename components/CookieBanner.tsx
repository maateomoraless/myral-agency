"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "myral-cookies-accepted";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== null) return;

    const showTimer = window.setTimeout(() => {
      setShow(true);
      requestAnimationFrame(() => setOpacity(1));
    }, 1000);

    return () => window.clearTimeout(showTimer);
  }, []);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem(STORAGE_KEY, accepted ? "true" : "false");
    setOpacity(0);
    window.setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[rgba(240,237,232,0.07)] bg-[#0a0a0a] px-10 py-5"
      style={{
        opacity,
        transition: "opacity 0.3s ease",
      }}
      role="dialog"
      aria-label="Preferencias de cookies"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <p className="max-w-xl text-[13px] leading-[1.7] text-[var(--muted)]">
          Usamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia. Puedes aceptar
          todas o gestionar tus preferencias.{" "}
          <Link href="/cookies" className="text-[#F5E614] hover:opacity-70">
            Política de cookies
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="rounded border border-[rgba(240,237,232,0.15)] px-6 py-2 text-sm text-[#f0ede8] transition-colors hover:border-[#F5E614]/30"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="rounded bg-[#F5E614] px-6 py-2 text-sm font-bold text-[#05050b] transition-opacity hover:opacity-90"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
