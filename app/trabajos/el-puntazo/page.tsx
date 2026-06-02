import {
  CaseStudyCta,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyTextHero,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

export default function ElPuntazoPage() {
  return (
    <>
      <CaseStudyTextHero
        watermark="EL PUNTAZO"
        badge="Social Media · León"
        title="El Puntazo"
        subtitle="El bar de tapas que León tenía que conocer."
      />

      <CaseStudyIntro>
        El Puntazo es un bar de tapas en León con una carta y un ambiente que merece ser conocido más allá de su barrio.
        MYRAL se encargó de darle la visibilidad que merecía.
      </CaseStudyIntro>

      <CaseStudyWhatWeDid
        items={[
          "Gestión de redes sociales",
          "Fotografía de tapas y ambiente",
          "Contenido para Instagram y TikTok",
          "Promoción de menús y eventos especiales",
        ]}
      />

      <CaseStudyResults quote="Un local con presencia digital sólida y nuevos clientes que llegan por redes." />

      <CaseStudyCta />
    </>
  );
}
