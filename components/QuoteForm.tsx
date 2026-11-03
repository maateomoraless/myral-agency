"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

const ENDPOINT = "https://formsubmit.co/ajax/info@myralagency.com";

const SERVICES = ["Producción audiovisual", "Redes sociales y publicidad", "Eventos", "IA y webs"] as const;
const BUDGETS = ["Menos de 1.000 €", "1.000 – 3.000 €", "3.000 – 6.000 €", "Más de 6.000 €", "Aún no lo sé"] as const;

const inputCls =
  "w-full border-b border-white/15 bg-transparent py-3 text-[14px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#F5E614]";

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-3.5 py-2 text-[11px] transition-colors ${
        active ? "border-[#F5E614] bg-[#F5E614] text-black" : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default function QuoteForm() {
  const { t } = useLang();
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [mailto, setMailto] = useState("");

  const toggle = (s: string) => setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_honey")) return;
    const data = {
      Nombre: String(fd.get("nombre") ?? ""),
      Email: String(fd.get("email") ?? ""),
      Teléfono: String(fd.get("telefono") ?? ""),
      "Empresa / marca": String(fd.get("empresa") ?? ""),
      Servicios: services.join(", ") || "—",
      Presupuesto: budget || "—",
      Proyecto: String(fd.get("mensaje") ?? ""),
    };
    const body = Object.entries(data)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    setMailto(
      `mailto:info@myralagency.com?subject=${encodeURIComponent(`Presupuesto · ${data.Nombre}`)}&body=${encodeURIComponent(body)}`,
    );
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `Nueva solicitud de presupuesto · ${data.Nombre}`,
          _replyto: data.Email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || (json && String(json.success) === "false")) throw new Error("send");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center">
        <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5E614] text-xl text-black">✓</span>
        <h3 className="font-[var(--font-syne)] text-[28px] font-extrabold text-white">Recibido.</h3>
        <p className="mt-3 max-w-sm text-[13px] leading-[1.8] text-[var(--muted)]">
          Te respondemos en menos de 24 horas con una primera propuesta. Si es urgente, escríbenos por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        <input name="nombre" required placeholder="Nombre *" autoComplete="name" className={inputCls} />
        <input name="email" type="email" required placeholder="Email *" autoComplete="email" className={inputCls} />
        <input name="telefono" type="tel" placeholder="Teléfono" autoComplete="tel" className={inputCls} />
        <input name="empresa" placeholder="Empresa o marca" autoComplete="organization" className={inputCls} />
      </div>

      <p className="mb-3 mt-9 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">¿Qué necesitas?</p>
      <div className="flex flex-wrap gap-2">
        {SERVICES.map((s) => (
          <Chip key={s} active={services.includes(s)} onClick={() => toggle(s)}>
            {s}
          </Chip>
        ))}
      </div>

      <p className="mb-3 mt-8 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">Presupuesto aproximado</p>
      <div className="flex flex-wrap gap-2">
        {BUDGETS.map((b) => (
          <Chip key={b} active={budget === b} onClick={() => setBudget(budget === b ? "" : b)}>
            {b}
          </Chip>
        ))}
      </div>

      <textarea
        name="mensaje"
        required
        rows={4}
        placeholder="Cuéntanos tu proyecto: qué es, para cuándo y qué quieres conseguir *"
        className={`${inputCls} mt-8 resize-none`}
      />

      <label className="mt-6 flex items-start gap-3 text-[11px] leading-[1.6] text-[var(--muted)]">
        <input type="checkbox" required className="mt-0.5 accent-[#F5E614]" />
        <span>
          He leído y acepto la{" "}
          <Link href="/privacidad" className="underline hover:text-[#F5E614]">
            política de privacidad
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-yellow mt-8 w-full bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black disabled:opacity-60"
      >
        {status === "sending" ? t("Enviando…") : t("Pedir presupuesto →")}
      </button>

      {status === "error" && (
        <p className="mt-4 text-[12px] leading-[1.7] text-[var(--muted)]">
          No se ha podido enviar.{" "}
          <a href={mailto} className="text-[#F5E614] underline">
            Envíalo por email
          </a>{" "}
          y te contestamos igual de rápido.
        </p>
      )}
    </form>
  );
}
