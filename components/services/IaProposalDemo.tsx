"use client";

import { useEffect, useState } from "react";
import { buildProposalPrompt, generateFallbackProposal } from "@/lib/fallbackProposal";

function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-2 py-12">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-[#F5E614]"
          style={{
            animation: "pulse 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

async function fetchClaudeProposal(
  nombre: string,
  tipo: string,
  necesidad: string,
): Promise<string | null> {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: buildProposalPrompt(nombre, tipo, necesidad),
        },
      ],
    }),
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    content?: { type: string; text?: string }[];
  };

  return data.content?.find((c) => c.type === "text")?.text?.trim() ?? null;
}

export default function IaProposalDemo() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [necesidad, setNecesidad] = useState("");
  const [loading, setLoading] = useState(false);
  const [fullText, setFullText] = useState("");
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!fullText) {
      setDisplayText("");
      return;
    }

    setDisplayText("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayText(fullText.slice(0, index));
      if (index >= fullText.length) {
        window.clearInterval(interval);
      }
    }, 12);

    return () => window.clearInterval(interval);
  }, [fullText]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFullText("");
    setLoading(true);

    try {
      const apiText = await fetchClaudeProposal(nombre, tipo, necesidad);
      setFullText(apiText ?? generateFallbackProposal(nombre, tipo, necesidad));
    } catch {
      setFullText(generateFallbackProposal(nombre, tipo, necesidad));
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full border border-[var(--border)] bg-[#0a0a0a] px-4 py-3.5 text-[14px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#F5E614]/40";

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de tu negocio"
          className={inputClass}
          aria-label="Nombre de tu negocio"
        />
        <input
          type="text"
          required
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          placeholder="Tipo de negocio"
          className={inputClass}
          aria-label="Tipo de negocio"
        />
        <input
          type="text"
          required
          value={necesidad}
          onChange={(e) => setNecesidad(e.target.value)}
          placeholder="¿Qué necesitas mejorar?"
          className={inputClass}
          aria-label="Qué necesitas mejorar"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F5E614] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Generando..." : "Generar propuesta con IA →"}
        </button>
      </form>

      {loading && (
        <div className="mt-8 text-center">
          <LoadingDots />
          <p className="text-[13px] text-[var(--muted)]">Claude está generando tu propuesta...</p>
        </div>
      )}

      {displayText && !loading && (
        <div className="mt-10">
          <div className="rounded-xl border border-[#F5E614]/20 bg-[#0a0a0a] p-8">
            <p className="whitespace-pre-wrap text-[14px] leading-[1.85] text-white">
              {displayText}
              {displayText.length < fullText.length && (
                <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[#F5E614]" />
              )}
            </p>
          </div>
          {displayText.length >= fullText.length && (
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
  );
}
