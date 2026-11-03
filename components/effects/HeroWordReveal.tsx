"use client";

import { createElement, type CSSProperties } from "react";
import { useLang } from "@/lib/i18n";

export default function HeroWordReveal({
  text,
  as = "span",
  className = "",
  style,
}: {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  style?: CSSProperties;
}) {
  const { t } = useLang();
  const words = t(text).split(/\s+/).filter(Boolean);

  return createElement(
    as,
    { className, style },
    words.map((word, i) => (
      <span
        key={`${word}-${i}`}
        className="hero-word inline-block"
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        {word}
        {i < words.length - 1 ? "\u00A0" : ""}
      </span>
    )),
  );
}
