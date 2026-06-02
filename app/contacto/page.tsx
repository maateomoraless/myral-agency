"use client";

import { useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    Cal?: {
      ns?: Record<string, (action: string, options?: { elementOrSelector?: string }) => void>;
    };
  }
}

export default function ContactoPage() {
  useEffect(() => {
    const init = () => {
      window.Cal?.ns?.diagnostico?.("inline", { elementOrSelector: "#cal-inline" });
    };

    if (window.Cal?.ns?.diagnostico) {
      init();
      return;
    }

    const interval = setInterval(() => {
      if (window.Cal?.ns?.diagnostico) {
        init();
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="section-pad reveal">
        <h1 className="title-display">Hablemos.</h1>
        <p className="mt-6 max-w-xl text-[14px] leading-[1.85] text-[var(--muted)]">
          Reserva una llamada de diagnóstico gratuita de 20 minutos. Sin compromiso.
        </p>
      </section>

      <section className="section-pad section-alt reveal">
        <div id="cal-inline" className="min-h-[600px] w-full border border-[var(--border)] bg-[var(--bg)]" />

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-10 text-[13px] text-white/75">
          <Link href="mailto:info@myralagency.com" className="hover:text-[#F5E614]">info@myralagency.com</Link>
          <Link href="tel:+34672126363" className="hover:text-[#F5E614]">+34 672 12 63 63</Link>
          <Link href="https://instagram.com/myralagency" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5E614]">@myralagency</Link>
        </div>
      </section>
    </>
  );
}
