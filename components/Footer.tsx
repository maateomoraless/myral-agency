import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/ia", label: "IA" },
  { href: "/contacto", label: "Contacto" },
];

const socials = [
  { href: "https://instagram.com/myralagency", label: "IG" },
  { href: "https://www.tiktok.com/@myralagency", label: "TK" },
  { href: "https://www.linkedin.com/company/myral-agency/", label: "LI" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-7 md:px-[52px]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
        <Link href="/">
          <img src="/images/logo_myral_sin_fondo.png" alt="MYRAL" style={{ height: "32px", width: "auto" }} />
        </Link>

        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[9px] uppercase tracking-[0.15em] text-white/35 hover:text-[#F5E614]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 px-2.5 py-1.5 text-[8px] tracking-[0.1em] text-white/35 hover:border-[#F5E614] hover:text-[#F5E614]"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-[1400px] border-t border-white/5 pt-3 text-[8px] text-white/20">
        © 2025 Myral Agency · León · myralagency.com
      </p>
      <p className="mx-auto mt-3 max-w-[1400px] text-center text-[11px] text-[var(--muted)]">
        <Link href="/aviso-legal" className="hover:text-[#F5E614]">
          Aviso Legal
        </Link>
        {" · "}
        <Link href="/privacidad" className="hover:text-[#F5E614]">
          Privacidad
        </Link>
        {" · "}
        <Link href="/cookies" className="hover:text-[#F5E614]">
          Cookies
        </Link>
      </p>
    </footer>
  );
}
