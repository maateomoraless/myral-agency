"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ui } from "@/lib/projects";
import { useLang, useT } from "./Lang";

function MadridClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Madrid" });
    const tick = () => setTime(fmt.format(new Date()));
    const id = setInterval(tick, 10_000);
    const first = setTimeout(tick, 0);
    return () => {
      clearInterval(id);
      clearTimeout(first);
    };
  }, []);
  return <span suppressHydrationWarning>{time || "--:--"} CET</span>;
}

/** Marco fijo: el único texto permanente vive en las cuatro esquinas. */
export default function Chrome() {
  const t = useT();
  const { lang, setLang } = useLang();
  const path = usePathname();
  const lab = path.startsWith("/lab/");
  const nav = [
    { href: "/", label: t(ui.work) },
    { href: "/studio", label: t(ui.studio) },
    { href: "/contacto", label: t(ui.contact) },
  ];

  if (lab) return null;

  return (
    <div className="studio-chrome mono pointer-events-none fixed inset-0 z-[60] text-[10px] uppercase tracking-[0.18em] text-[#f0ede8] mix-blend-difference">
      <Link href="/" className="pointer-events-auto absolute left-5 top-5 md:left-8 md:top-7" aria-label="MYRAL" data-cursor="focus">
        <img src="/images/logo_myral_sin_fondo.png" alt="MYRAL" className="h-[18px] w-auto md:h-[22px]" />
      </Link>

      <nav className="pointer-events-auto absolute right-5 top-5 flex gap-5 md:right-8 md:top-7 md:gap-8">
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            data-cursor="focus"
            className={`transition-opacity ${path === n.href ? "opacity-100" : "opacity-55 hover:opacity-100"}`}
          >
            {n.label}
          </Link>
        ))}
      </nav>

      <span className="absolute bottom-5 left-5 md:bottom-7 md:left-8">{t(ui.worldwide)}</span>

      <div className="pointer-events-auto absolute bottom-5 right-5 flex items-center gap-5 md:bottom-7 md:right-8">
        <span className="hidden opacity-55 sm:inline">
          <MadridClock />
        </span>
        <span>
          <button
            type="button"
            data-cursor="focus"
            onClick={() => setLang("en")}
            className={lang === "en" ? "opacity-100" : "opacity-40"}
          >
            EN
          </button>
          <span className="mx-1 opacity-40">/</span>
          <button
            type="button"
            data-cursor="focus"
            onClick={() => setLang("es")}
            className={lang === "es" ? "opacity-100" : "opacity-40"}
          >
            ES
          </button>
        </span>
      </div>
    </div>
  );
}
