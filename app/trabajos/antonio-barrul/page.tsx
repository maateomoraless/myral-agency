import {
  CaseCTA,
  CaseLink,
  CaseList,
  CaseSection,
  CaseStats,
} from "@/components/case-study/CaseBody";
import { CaseHero, CaseHeroImage } from "@/components/case-study/CaseHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antonio Barrul",
  description:
    "Producción audiovisual cinematográfica para el primer combate europeo de Antonio Barrul.",
};

export default function AntonioBarrulPage() {
  return (
    <>
      <CaseHero
        badge="Producción Audiovisual · 2024"
        title="Antonio Barrul"
        subtitle="El anuncio que lo cambió todo."
      >
        <CaseHeroImage src="/images/barrul.png" alt="Antonio Barrul" />
      </CaseHero>

      <CaseSection>
        <p>
          Antonio Barrul es uno de los boxeadores más seguidos de España, con más
          de 300.000 seguidores en Instagram y una comunidad fiel que sigue cada
          paso de su carrera. Cuando llegó a MYRAL tenía un hito que anunciar: su
          primer combate a nivel europeo. Necesitaba algo que estuviera a la
          altura del momento.
        </p>
      </CaseSection>

      <CaseSection title="El reto">
        <p>
          No era un anuncio cualquiera. Era el lanzamiento de un combate que
          marcaría un antes y un después en su carrera. El contenido tenía que
          transmitir la tensión, la preparación y la personalidad de Antonio —
          sin caer en el tópico del vídeo de boxeo al uso. Teníamos que hacer algo
          cinematográfico.
        </p>
      </CaseSection>

      <CaseList
        items={[
          "Desarrollo del concepto narrativo y guion visual",
          "Dirección y producción completa del vídeo",
          "Grabación en localizaciones reales de León",
          "Edición cinematográfica con color grading premium",
          "Adaptación para Instagram Reels y Stories",
        ]}
      />

      <CaseStats
        stats={[
          { value: "300K+", label: "Impresiones orgánicas" },
          { value: "Top", label: "Publicación del mes" },
          { value: "Sold out", label: "Primeras horas" },
        ]}
      >
        El vídeo se convirtió en la publicación con más alcance orgánico de su
        historia en Instagram. Sin publicidad pagada.
      </CaseStats>

      <CaseLink
        href="https://www.instagram.com/reel/DOoi8rWAk_V/"
        label="Ver el proyecto en Instagram →"
      />

      <CaseCTA />
    </>
  );
}
