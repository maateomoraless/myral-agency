"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/ia", label: "IA" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        stuck ? "border-b border-white/10 bg-[rgba(5,5,11,0.9)] backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-[52px]">
        <Link href="/" className="font-[var(--font-syne)] text-2xl font-extrabold text-white">
          MYRAL<span className="text-[#F5E614]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.18em] transition-colors ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            data-cal-link="myralagency/diagnostico"
            data-cal-namespace="diagnostico"
            data-cal-config='{"layout":"month_view"}'
            className="bg-[#F5E614] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-black"
          >
            Hablemos
          </button>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[rgba(5,5,11,0.95)] px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              data-cal-link="myralagency/diagnostico"
              data-cal-namespace="diagnostico"
              data-cal-config='{"layout":"month_view"}'
              className="bg-[#F5E614] py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-black"
            >
              Hablemos
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
