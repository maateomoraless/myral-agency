import {
  CaseCTA,
  CaseLink,
  CaseList,
  CaseSection,
} from "@/components/case-study/CaseBody";
import { CaseHero, CaseHeroGradient } from "@/components/case-study/CaseHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run Run Social Club × Santa Madre",
  description:
    "Colaboración de influencer marketing entre comunidad de runners y marca de suplementos.",
};

export default function RunRunPage() {
  return (
    <>
      <CaseHero
        badge="Influencer Marketing · Marca · 2024"
        title="Run Run Social Club × Santa Madre"
        subtitle="Cuando una comunidad se convierte en canal."
      >
        <CaseHeroGradient label="RUN RUN × SANTA MADRE" />
      </CaseHero>

      <CaseSection>
        <p>
          Run Run Social Club es una comunidad de runners con una identidad de
          marca muy definida. Santa Madre es una marca de suplementos deportivos
          que quería llegar a ese público de forma auténtica. MYRAL coordinó la
          colaboración entre ambas: desde el concepto hasta la producción del
          contenido.
        </p>
      </CaseSection>

      <CaseList
        items={[
          "Concepto creativo de la colaboración",
          "Producción del contenido audiovisual",
          "Estrategia de publicación y timing",
          "Adaptación para Instagram Reels",
        ]}
      />

      <CaseSection title="El resultado">
        <p>
          Contenido que no parecía publicidad. Eso es lo más difícil de conseguir
          y lo que más convierte. La colaboración generó engagement real de una
          comunidad que confía en las marcas que Run Run recomienda.
        </p>
      </CaseSection>

      <CaseLink
        href="https://www.instagram.com/reel/DOqJdh6jJPJ/"
        label="Ver el reel →"
      />

      <CaseCTA />
    </>
  );
}
