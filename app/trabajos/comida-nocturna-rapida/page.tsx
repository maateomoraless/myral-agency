import {
  CaseStudyCta,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyTextHero,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

export default function ComidaNocturnaRapidaPage() {
  return (
    <>
      <CaseStudyTextHero
        watermark="COMIDA NOCTURNA RÁPIDA"
        badge="Social Media · León"
        title="Comida Nocturna Rápida"
        subtitle="La mejor opción a las 3 de la madrugada."
      />

      <CaseStudyIntro>
        Un concepto de comida rápida nocturna en León que necesitaba conectar con su público objetivo — jóvenes que
        salen de noche y buscan una buena opción para comer. MYRAL desarrolló una estrategia de contenido adaptada a ese
        contexto.
      </CaseStudyIntro>

      <CaseStudyWhatWeDid
        items={[
          "Estrategia de contenido orientada al público nocturno",
          "Gestión de Instagram y TikTok",
          "Contenido dinámico y con humor adaptado al tono del local",
          "Promociones y campañas en horario nocturno",
        ]}
      />

      <CaseStudyResults quote="Un local de referencia para el público nocturno de León con comunidad activa en redes." />

      <CaseStudyCta />
    </>
  );
}
