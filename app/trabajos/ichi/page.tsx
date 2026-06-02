import {
  CaseCTA,
  CaseLink,
  CaseList,
  CaseSection,
} from "@/components/case-study/CaseBody";
import { CaseHero, CaseHeroImage } from "@/components/case-study/CaseHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itziar Martínez",
  description:
    "Cobertura audiovisual de Ichi, escaladora top 20 mundial, en competiciones internacionales.",
};

export default function IchiPage() {
  return (
    <>
      <CaseHero
        badge="Contenido Deportivo · 2024-2025"
        title="Itziar Martínez"
        subtitle="Top 20 del mundo. Contada como merece."
      >
        <CaseHeroImage src="/images/ichi.png" alt="Itziar Martínez" />
      </CaseHero>

      <CaseSection>
        <p>
          Itziar Martínez, conocida en el mundo de la escalada como Ichi, es una
          de las mejores escaladoras españolas de la historia. Con presencia en
          competiciones de la Copa del Mundo y clasificaciones que la sitúan entre
          las 20 mejores del mundo, Ichi necesitaba un contenido visual que
          transmitiera tanto su nivel técnico como su personalidad fuera de la
          pared.
        </p>
      </CaseSection>

      <CaseSection title="El reto">
        <p>
          La escalada de competición es un deporte visualmente espectacular pero
          difícil de capturar bien. Los ángulos importan, el momento importa, la
          luz importa. Trabajamos con Ichi en competiciones internacionales en
          Innsbruck y otros escenarios europeos para crear un archivo visual que
          reflejara tanto la atleta de élite como la persona.
        </p>
      </CaseSection>

      <CaseList
        items={[
          "Cobertura fotográfica y audiovisual en competiciones internacionales",
          "Contenido para redes sociales adaptado al formato de cada plataforma",
          "Fotografía de acción en exterior en roca natural",
          "Edición y postproducción de todos los assets",
        ]}
      />

      <CaseSection title="El resultado">
        <p>
          Una biblioteca de contenido que Ichi usa para su presencia online, con
          imágenes que han circulado en medios especializados de escalada y
          comunidades deportivas internacionales.
        </p>
      </CaseSection>

      <CaseLink
        href="https://www.instagram.com/ichiclimb/"
        label="Ver perfil de Instagram →"
      />

      <CaseCTA />
    </>
  );
}
