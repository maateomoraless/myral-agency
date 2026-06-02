import {
  CaseCTA,
  CaseList,
  CaseSection,
  CaseStats,
} from "@/components/case-study/CaseBody";
import { CaseHero, CaseHeroDark } from "@/components/case-study/CaseHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leyendas del Vallenato",
  description:
    "Gestión integral de festival: 2.500 asistentes, gestión remota desde Innsbruck.",
};

export default function LeyendasPage() {
  return (
    <>
      <CaseHero
        badge="Gestión Integral de Evento · 2025"
        title="Leyendas del Vallenato"
        subtitle="2.500 personas. 1.788 kilómetros. Un festival."
      >
        <CaseHeroDark title="MYRAL." subtitle="Fotos del evento próximamente" />
      </CaseHero>

      <CaseSection>
        <p>
          Festival de música latina en León, España. MYRAL asumió la dirección y
          gestión integral del evento — desde la estrategia de comunicación y
          venta de entradas hasta la logística de transporte y la cobertura
          audiovisual. Todo coordinado de forma 100% remota desde Innsbruck,
          Austria, a 1.788 kilómetros de distancia.
        </p>
      </CaseSection>

      <CaseSection title="El reto">
        <p>
          Organizar un evento de 2.500 personas en España mientras el equipo
          director está en Austria no es un problema de logística. Es un problema
          de sistemas. Necesitábamos procesos, tecnología y una red de personas
          en el terreno que funcionara sin supervisión constante.
        </p>
      </CaseSection>

      <CaseList
        items={[
          "Estrategia de comunicación y campañas Meta Ads segmentadas por provincia",
          "Sistema de venta de entradas con pricing dinámico (General, VIP, Mesa Reservada)",
          "Red de 3 nodos de transporte desde Asturias, Castilla y El Bierzo",
          "Validación de acceso con tecnología Fourvenues — menos de 2 segundos por asistente",
          "Monitorización en tiempo real del flujo de asistentes desde Innsbruck",
          "Gestión de RRPP con sistema de comisiones y seguimiento automático",
        ]}
      />

      <CaseStats
        stats={[
          { value: "2.500", label: "Asistentes · Aforo completo" },
          { value: "25%", label: "Tasa de conversión (vs 2-3% industria)" },
          { value: "3 nodos", label: "Red territorial" },
        ]}
      >
        Tasa de conversión del 25% en landing page frente al 2-3% de media de la
        industria. El modelo de gestión remota demostró ser igual de efectivo —
        y más rentable — que la presencia física constante.
      </CaseStats>

      <CaseCTA />
    </>
  );
}
