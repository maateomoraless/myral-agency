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
      className="mono fixed bottom-14 left-5 z-[70] max-w-[340px] border border-white/10 bg-[#05050b]/90 p-4 backdrop-blur md:left-8"
      style={{
        opacity,
        transition: "opacity 0.3s ease",
      }}
      role="dialog"
      aria-label="Preferencias de cookies"
    >
      <div className="flex flex-col gap-4">
        <p className="text-[10px] leading-[1.6] text-white/55">
          Cookies help us understand how the site is used.{" "}
          <Link href="/cookies" className="text-white underline underline-offset-2 hover:opacity-70">
            Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-6">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="text-[10px] uppercase tracking-[0.16em] text-white/50 hover:text-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="text-[10px] uppercase tracking-[0.16em] text-[#F5E614] hover:opacity-70"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
