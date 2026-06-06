"use client";

import { useEffect, useState } from "react";
import { generarDiagnostico } from "@/lib/generarDiagnostico";

const negocios = [
  "Restaurante / Bar",
  "Hotel / Alojamiento",
  "Tienda / E-commerce",
  "Deporte / Fitness",
  "Eventos / Entretenimiento",
  "Servicios profesionales",
] as const;

const serviciosOptions = [
  "Redes Sociales",
  "Publicidad Digital",
  "Contenido / Vídeo",
  "Branding / Identidad",
  "Web / App",
  "Gestión de Eventos",
  "Influencer Marketing",
  "Automatización IA",
] as const;

const situacionesOptions = [
  "No tengo presencia online",
  "Tengo presencia básica pero no funciona",
  "Quiero mejorar lo que ya tengo",
  "Estoy lanzando un negocio nuevo",
] as const;

type Step = 1 | 2 | 3 | "result";

function renderMarkdownText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function SelectCard({
  label,
  selected,
  onClick,
  className = "",
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-4 py-4 text-left text-[13px] leading-[1.5] transition-colors ${selected ? "border-[#F5E614] bg-[#F5E614]/[0.08] text-white" : "border-[#222] bg-[#07070f] text-white/80 hover:border-[#F5E614]/30"} ${className}`}
    >
      {label}
    </button>
  );
}

export default function IaDiagnosticoQuiz() {
  const [step, setStep] = useState<Step>(1);
  const [negocio, setNegocio] = useState<string>("");
  const [servicios, setServicios] = useState<string[]>([]);
  const [situacion, setSituacion] = useState<string>("");
  const [fullText, setFullText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [fadeIn, setFadeIn] = useState(true);

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  function goToStep(next: Step) {
    setFadeIn(false);
    window.setTimeout(() => {
      setStep(next);
      setFadeIn(true);
    }, 200);
  }

  function toggleServicio(servicio: string) {
    setServicios((prev) =>
      prev.includes(servicio) ? prev.filter((s) => s !== servicio) : [...prev, servicio],
    );
  }

  function handleGenerate() {
    const text = generarDiagnostico(negocio, servicios, situacion);
    setFullText(text);
    setDisplayText("");
    goToStep("result");
  }

  useEffect(() => {
    if (step !== "result" || !fullText) return;

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayText(fullText.slice(0, index));
      if (index >= fullText.length) {
        window.clearInterval(interval);
      }
    }, 20);

    return () => window.clearInterval(interval);
  }, [step, fullText]);

  return (
    <div className="mx-auto max-w-3xl">
      {step !== "result" && (
        <div className="mb-10 h-1 w-full overflow-hidden rounded-full bg-[#222]">
          <div
            className="h-full bg-[#F5E614] transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div
        className={`transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        {step === 1 && (
          <div>
            <h3 className="mb-8 text-center font-[var(--font-syne)] text-[22px] font-bold text-white">
              ¿Qué tipo de negocio tienes?
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {negocios.map((item) => (
                <SelectCard
                  key={item}
                  label={item}
                  selected={negocio === item}
                  onClick={() => setNegocio(item)}
                />
              ))}
            </div>
            <button
              type="button"
              disabled={!negocio}
              onClick={() => goToStep(2)}
              className="mt-10 w-full bg-[#F5E614] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="mb-8 text-center font-[var(--font-syne)] text-[22px] font-bold text-white">
              ¿Qué quieres mejorar?
            </h3>
            <p className="mb-6 text-center text-[12px] text-[var(--muted)]">Selección múltiple</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviciosOptions.map((item) => (
                <SelectCard
                  key={item}
                  label={item}
                  selected={servicios.includes(item)}
                  onClick={() => toggleServicio(item)}
                />
              ))}
            </div>
            <button
              type="button"
              disabled={servicios.length === 0}
              onClick={() => goToStep(3)}
              className="mt-10 w-full bg-[#F5E614] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="mb-8 text-center font-[var(--font-syne)] text-[22px] font-bold text-white">
              ¿Cuál es tu situación actual?
            </h3>
            <div className="flex flex-col gap-3">
              {situacionesOptions.map((item) => (
                <SelectCard
                  key={item}
                  label={item}
                  selected={situacion === item}
                  onClick={() => setSituacion(item)}
                  className="py-5 text-center sm:text-left"
                />
              ))}
            </div>
            <button
              type="button"
              disabled={!situacion}
              onClick={handleGenerate}
              className="mt-10 w-full bg-[#F5E614] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Generar diagnóstico →
            </button>
          </div>
        )}

        {step === "result" && (
          <div>
            <p className="mb-8 flex items-center justify-center gap-2 text-center text-[9px] uppercase tracking-[0.22em] text-[#F5E614]">
              <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
              Tu diagnóstico personalizado
            </p>
            <div className="rounded-xl border border-[#F5E614]/20 bg-[#07070f] p-8">
              <p className="whitespace-pre-wrap text-[14px] leading-[1.85] text-white/90">
                {renderMarkdownText(displayText)}
                {displayText.length < fullText.length && (
                  <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[#F5E614]" />
                )}
              </p>
            </div>
            {displayText.length >= fullText.length && fullText.length > 0 && (
              <button
                type="button"
                data-cal-link="myralagency/diagnostico"
                data-cal-namespace="diagnostico"
                data-cal-config='{"layout":"month_view"}'
                className="mt-8 w-full bg-[#F5E614] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-opacity hover:opacity-90"
              >
                Reservar llamada gratuita →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
