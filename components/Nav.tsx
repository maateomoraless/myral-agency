"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/servicios/ia", label: "IA" },
  { href: "/contacto", label: "Contacto" },
];

const serviceLinks = [
  { href: "/servicios/gestion-redes-sociales", label: "Gestión de Redes Sociales" },
  { href: "/servicios/produccion-contenido", label: "Producción de Contenido" },
  { href: "/servicios/publicidad-digital", label: "Publicidad Digital" },
  { href: "/servicios/branding", label: "Branding e Identidad Visual" },
  { href: "/servicios/gestion-eventos", label: "Gestión y Producción de Eventos" },
  { href: "/servicios/influencer-marketing", label: "Influencer Marketing" },
  { href: "/servicios/ia", label: "Automatización con IA", featured: true },
  { href: "/servicios/webs-apps", label: "Creación de Webs & Apps", featured: true },
] as const;

const linkClassName = (active: boolean) =>
  `text-[11px] uppercase tracking-[0.18em] transition-colors ${
    active ? "text-white" : "text-white/60 hover:text-white"
  }`;

export default function Nav() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        stuck ? "border-b border-white/10 bg-[rgba(5,5,11,0.9)] backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-[52px]">
        <Link href="/">
          <img
            src="/images/logo_myral_sin_fondo.png"
            alt="MYRAL"
            height={28}
            style={{ height: "28px", width: "auto" }}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className={linkClassName(pathname === "/")}>
            Inicio
          </Link>

          <div className="group relative">
            <span
              className={`cursor-default ${linkClassName(pathname.startsWith("/servicios"))}`}
            >
              Servicios
            </span>
            <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[280px] pt-2 opacity-0 translate-y-[-4px] transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
              <div className="rounded-lg border border-[rgba(240,237,232,0.07)] bg-[#0a0a0a] p-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center px-4 py-2.5 text-[13px] text-[var(--muted)] transition-all duration-200 hover:pl-5 hover:text-white"
                  >
                    {"featured" in service && service.featured ? (
                      <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5E614]" aria-hidden />
                    ) : null}
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName(
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)),
              )}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            data-cal-link="myralagency/diagnostico"
            data-cal-namespace="diagnostico"
            data-cal-config='{"layout":"month_view"}'
            className="btn-yellow bg-[#F5E614] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-black"
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
            <Link href="/" className="text-[11px] uppercase tracking-[0.18em] text-white/70">
              Inicio
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between text-left text-[11px] uppercase tracking-[0.18em] text-white/70"
                aria-expanded={servicesOpen}
              >
                Servicios
                <span className="text-[#F5E614]">{servicesOpen ? "−" : "+"}</span>
              </button>
              {servicesOpen && (
                <div className="mt-3 flex flex-col gap-2 border-l border-white/10 pl-4">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center text-[12px] text-white/55 transition-colors hover:text-white"
                    >
                      {"featured" in service && service.featured ? (
                        <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5E614]" aria-hidden />
                      ) : null}
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              data-cal-link="myralagency/diagnostico"
              data-cal-namespace="diagnostico"
              data-cal-config='{"layout":"month_view"}'
              className="btn-yellow bg-[#F5E614] py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-black"
            >
              Hablemos
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
