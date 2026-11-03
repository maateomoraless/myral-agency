"use client";

import Link from "next/link";
import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";

const points = [
  "Llamada de 20 minutos, gratis y sin compromiso",
  "Análisis real de tu presencia online",
  "Plan de acción personalizado para tu caso",
  "Lunes a viernes, por videollamada",
] as const;


const faqs = [
  {
    question: "¿Cuánto cuesta trabajar con MYRAL?",
    answer:
      "Depende del proyecto y los servicios que necesites. Rellena el formulario o reserva una llamada y te damos un presupuesto concreto, sin sorpresas.",
  },
  {
    question: "¿Cuánto tiempo tardáis en empezar?",
    answer:
      "Una vez aprobado el presupuesto, arrancamos en menos de una semana. No hay listas de espera largas.",
  },
  {
    question: "¿Hacéis contratos de permanencia?",
    answer:
      "No. Trabajamos con contratos mensuales renovables. Si en algún momento no estás satisfecho, puedes cancelar con 30 días de antelación.",
  },
  {
    question: "¿Trabajáis solo en León?",
    answer:
      "Tenemos clientes en toda España. Gestionamos proyectos de forma remota sin que eso afecte a los resultados.",
  },
  {
    question: "¿Qué pasa después de la llamada?",
    answer:
      "Te enviamos una propuesta personalizada por email en menos de 48 horas. Sin presión, sin compromiso.",
  },
] as const;

export default function ContactoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="reveal hero-text-wrap w-full overflow-visible bg-[#05050b] px-6 py-32 md:px-[52px]">
        <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
          <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
          Contacto
        </p>
        <h1
          className="hero-title-80 font-[var(--font-syne)] font-extrabold tracking-[-0.025em] text-white"
        >
          Hablemos.
        </h1>
        <p
          className="font-[var(--font-instrument)] italic text-[#F5E614] text-2xl leading-[1] pb-[0.1em] overflow-visible md:text-3xl lg:text-[clamp(28px,4vw,48px)] lg:leading-[1.1]"
        >
          Cuéntanos tu proyecto.
        </p>
        <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
          Rellena el formulario y te enviamos una primera propuesta en menos de 24 horas. ¿Prefieres hablar? Reserva una
          llamada de 20 minutos o escríbenos por WhatsApp.
        </p>
      </section>

      <section className="reveal grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        <div className="flex flex-col justify-center bg-[#07070f] px-6 py-16 md:px-[80px] lg:py-20">
          <h2 className="font-[var(--font-syne)] text-[24px] font-bold text-white">¿Prefieres hablarlo?</h2>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-[14px] leading-[1.6] text-white/85">
                <span className="shrink-0 text-[#F5E614]">→</span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              data-cal-link="myralagency/diagnostico"
              data-cal-namespace="diagnostico"
              data-cal-config='{"layout":"month_view"}'
              className="border border-[#F5E614] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#F5E614] transition-colors hover:bg-[#F5E614] hover:text-black"
            >
              Reservar llamada gratuita →
            </button>
            <Link
              href="https://wa.me/34672126363"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-6 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            >
              WhatsApp →
            </Link>
          </div>

          <div className="my-8 h-px w-full bg-[#222]" />

          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">Email</p>
            <Link
              href="mailto:info@myralagency.com"
              className="mt-1 inline-block text-[14px] text-white transition-colors hover:text-[#F5E614]"
            >
              info@myralagency.com
            </Link>

            <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">Teléfono</p>
            <Link
              href="tel:+34672126363"
              className="mt-1 inline-block text-[14px] text-white transition-colors hover:text-[#F5E614]"
            >
              +34 672 12 63 63
            </Link>

            <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">Instagram</p>
            <Link
              href="https://instagram.com/myralagency"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-[14px] text-white transition-colors hover:text-[#F5E614]"
            >
              @myralagency
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2 text-[11px] text-[var(--muted)]">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#22c55e]" />
            Disponible para nuevos proyectos
          </p>
        </div>

        <div className="bg-[#05050b] px-6 py-16 md:px-[80px] lg:py-20">
          <p className="mb-3 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Presupuesto en 24 h</p>
          <h2 className="mb-10 font-[var(--font-syne)] text-[clamp(28px,3vw,40px)] font-extrabold leading-tight text-white">
            Pide tu presupuesto.
          </h2>
          <QuoteForm />
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-[32px] font-extrabold text-white">Preguntas frecuentes.</h2>
        <div className="mt-10 border-t border-[#222]">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={question} className="border-b border-[#222]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-[var(--font-syne)] text-[15px] font-semibold text-white transition-colors hover:text-[#F5E614]"
                  aria-expanded={isOpen}
                >
                  {question}
                  <span className="shrink-0 text-[#F5E614]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-[13px] leading-[1.75] text-[var(--muted)]">{answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 text-center md:px-[52px]">
        <h2 className="cta-heading mx-auto w-full max-w-3xl font-[var(--font-syne)] text-[28px] font-bold text-white">
          ¿Prefieres escribirnos directamente?
        </h2>
        <Link
          href="mailto:info@myralagency.com"
          className="mt-8 inline-block border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]"
        >
          info@myralagency.com →
        </Link>
        <p className="mt-6 text-[12px] text-[var(--muted)]">Respondemos en menos de 24 horas</p>
      </section>
    </>
  );
}
