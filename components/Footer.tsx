import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/ia", label: "IA" },
  { href: "/contacto", label: "Contacto" },
];

const social = [
  { label: "IG", href: "https://instagram.com/myralagency" },
  { label: "TK", href: "https://tiktok.com/@myralagency" },
  { label: "LI", href: "https://linkedin.com/company/myralagency" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-7 md:px-13">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
        <Link href="/" className="font-syne text-base font-extrabold text-cream">
          MYRAL<span className="text-yellow">.</span>
        </Link>
        <div className="flex flex-wrap gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[8px] uppercase tracking-[0.15em] text-cream/30 transition-colors hover:text-yellow"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          {social.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/15 px-2.5 py-1.5 text-[8px] tracking-[0.1em] text-cream/30 transition-all hover:border-yellow hover:text-yellow"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-[1400px] border-t border-cream/5 pt-3 text-[8px] text-cream/15">
        © 2025 Myral Agency · León · myralagency.com
      </p>
    </footer>
  );
}
