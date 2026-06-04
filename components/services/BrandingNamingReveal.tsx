"use client";

import { useInViewOnce } from "@/components/effects/AnimatedCounter";

const LETTERS = "MYRAL".split("");

export default function BrandingNamingReveal() {
  const { ref, active } = useInViewOnce();

  return (
    <div
      ref={ref}
      className="flex items-center justify-center rounded-xl bg-[#07070f] p-12"
    >
      <span
        className="font-[var(--font-syne)] font-extrabold leading-none text-white"
        style={{ fontSize: "120px" }}
        aria-label="MYRAL"
      >
        {LETTERS.map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            className="inline-block transition-all duration-500 ease-out"
            style={{
              transitionDelay: active ? `${i * 0.1}s` : "0s",
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
}
