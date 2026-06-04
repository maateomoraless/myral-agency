"use client";

function HoverLetters({ text, className }: { text: string; className: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="inline-block cursor-default transition-colors duration-200 hover:text-[#F5E614]"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function BrandingTypographyPanel() {
  return (
    <div className="order-2 rounded-xl bg-[#07070f] p-8 lg:order-1">
      <p className="font-[var(--font-syne)] text-[48px] font-extrabold leading-none text-white">Syne</p>
      <p className="mt-6 font-[var(--font-syne)] text-2xl font-normal tracking-wide text-[var(--muted)]">
        <HoverLetters text="ABCDEFGHIJKLM" className="" />
      </p>
      <p className="mt-2 font-[var(--font-syne)] text-2xl font-normal tracking-wide text-[var(--muted)]">
        <HoverLetters text="nopqrstuvwxyz" className="" />
      </p>
      <p className="mt-2 font-[var(--font-syne)] text-xl font-normal text-[var(--muted)]">
        <HoverLetters text="0123456789" className="" />
      </p>
      <div className="my-8 h-px bg-[var(--border)]" />
      <p className="font-[var(--font-instrument)] text-[36px] italic text-[#F5E614]">Instrument Serif</p>
      <p className="mt-2 font-[var(--font-instrument)] text-xl italic text-[var(--muted)]">
        Para los momentos que importan.
      </p>
    </div>
  );
}
