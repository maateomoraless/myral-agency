/** Marcas a mano (rotulador). Cada aparición se dibuja sola. */
export function HandUnderline({ className = "" }: { className?: string }) {
  return (
    <svg className={`hand-stroke ${className}`} viewBox="0 0 300 20" preserveAspectRatio="none" fill="none" aria-hidden>
      <path
        pathLength={1}
        d="M3 13 C 40 7, 86 9, 128 11 S 214 15, 252 9 S 290 6, 297 10"
        stroke="#F5E614"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandCircle({ className = "" }: { className?: string }) {
  return (
    <svg className={`hand-stroke ${className}`} viewBox="0 0 200 120" preserveAspectRatio="none" fill="none" aria-hidden>
      <path
        pathLength={1}
        d="M120 10 C 60 4, 12 24, 10 60 C 8 98, 70 116, 120 110 C 176 103, 196 70, 188 42 C 180 16, 140 6, 92 12"
        stroke="#F5E614"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
