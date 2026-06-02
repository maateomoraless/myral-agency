"use client";

import { CalButton } from "@/components/CalButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/ia", label: "IA" },
  { href: "/contacto", label: "Contacto" },
];

export function Nav() {
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
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ${
        stuck ? "border-b border-border bg-[rgba(5,5,11,0.9)] backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 md:px-13">
        <Link href="/" className="font-syne text-xl font-black text-cream">
          MYRAL<span className="text-yellow">.</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest transition-colors ${
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-cream"
                  : "text-white/40 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <CalButton className="cursor-pointer bg-yellow px-5 py-2.5 font-syne text-xs font-bold uppercase tracking-widest text-bg transition-opacity hover:opacity-85">
            Hablemos
          </CalButton>
        </div>

        <button
          type="button"
          aria-label="Menú"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-[72px] border-b border-border bg-[rgba(5,5,11,0.95)] px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-white/40"
              >
                {link.label}
              </Link>
            ))}
            <CalButton className="w-full bg-yellow py-3 font-syne text-xs font-bold uppercase tracking-widest text-bg">
              Hablemos
            </CalButton>
          </div>
        </div>
      )}
    </nav>
  );
}
