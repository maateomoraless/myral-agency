import {
  CaseBeforeAfter,
  CaseCTA,
  CaseLink,
  CaseList,
  CaseSection,
  CaseStats,
} from "@/components/case-study/CaseBody";
import { CaseHero, CaseHeroImage } from "@/components/case-study/CaseHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vermutería Cervantes",
  description:
    "De 200 a 2.000 seguidores en menos de un año. Social media para hostelería en León.",
};

export default function CervantesPage() {
  return (
    <>
      <CaseHero
        badge="Social Media · León · 2023-2024"
        title="Vermutería Cervantes"
        subtitle="De 200 a 2.000. En menos de un año."
      >
        <CaseHeroImage
          src="/images/cervantes-despues.png"
          alt="Vermutería Cervantes"
        />
      </CaseHero>

      <CaseSection>
        <p>
          Vermutería Cervantes es uno de los locales más emblemáticos de León.
          Buena comida, buen ambiente, clientela fiel. Pero cuando llegaron a
          MYRAL, su presencia en redes sociales no reflejaba para nada la calidad
          de lo que ofrecían. 200 seguidores, sin estrategia, sin contenido
          propio.
        </p>
      </CaseSection>

      <CaseSection title="El reto">
        <p>
          El sector de la hostelería en León es competitivo. Hay muchos locales
          buenos y la diferencia entre uno que está lleno y otro que no la marcan
          muchas veces las redes sociales. Teníamos que crear una presencia online
          que transmitiera la esencia del local y atrajera tanto a clientes
          habituales como a turistas.
        </p>
      </CaseSection>

      <CaseList
        items={[
          "Estrategia de contenido mensual adaptada al local y su clientela",
          "Fotografía gastronómica profesional de platos y ambiente",
          "Producción de vídeo y reels para Instagram",
          "Diseño de campañas especiales: Día del Padre, catas de vermut, menús de grupo",
          "Gestión diaria de la cuenta y atención a comentarios",
        ]}
      />

      <CaseBeforeAfter />

      <CaseStats
        stats={[
          { value: "200 → 2.000", label: "Seguidores en 12 meses" },
          { value: "+900%", label: "Crecimiento" },
          { value: "85K", label: "Alcance mensual" },
        ]}
      >
        Una comunidad activa que comenta, comparte y reserva. Las redes sociales
        pasaron de ser una cuenta olvidada a ser el principal canal de captación
        de clientes nuevos del local.
      </CaseStats>

      <CaseLink
        href="https://www.instagram.com/cervantes10vermuteria/"
        label="Ver Instagram →"
      />

      <CaseCTA />
    </>
  );
}
