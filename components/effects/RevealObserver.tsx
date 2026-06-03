"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const seen = new WeakSet<Element>();

    const observe = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      io.observe(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const scan = () => {
      document.querySelectorAll(".reveal, .reveal-section").forEach(observe);
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
