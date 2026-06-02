"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: {
      ns?: Record<
        string,
        (action: string, options?: { elementOrSelector?: string }) => void
      >;
    };
  }
}

export function CalInline() {
  useEffect(() => {
    const init = () => {
      window.Cal?.ns?.diagnostico?.("inline", {
        elementOrSelector: "#cal-inline",
      });
    };

    if (window.Cal?.ns?.diagnostico) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.Cal?.ns?.diagnostico) {
          init();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      id="cal-inline"
      className="min-h-[600px] w-full overflow-hidden rounded-sm border border-border bg-bg2"
    />
  );
}
