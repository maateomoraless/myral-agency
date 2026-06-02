import {
  CaseStudyCta,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyTextHero,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

export default function ElLocoDeLasTortillasPage() {
  return (
    <>
      <CaseStudyTextHero
        watermark="EL LOCO DE LAS TORTILLAS"
        badge="Social Media · Oviedo"
        title="El Loco de las Tortillas"
        subtitle="El restaurante más loco de Oviedo, online."
      />

      <CaseStudyIntro>
        El Loco de las Tortillas es un restaurante en Oviedo con una propuesta diferente y una personalidad muy
        definida. MYRAL tomó las riendas de su presencia en redes sociales para que su comunidad online reflejara la
        energía y el carácter único del local.
      </CaseStudyIntro>

      <CaseStudyWhatWeDid
        items={[
          "Estrategia de contenido adaptada al tono del local",
          "Producción de fotos y vídeos de platos y ambiente",
          "Gestión diaria de Instagram y TikTok",
          "Campañas de lanzamiento y promociones especiales",
        ]}
      />

      <CaseStudyResults quote="Una comunidad activa que sigue el local, comparte su contenido y llena las mesas." />

      <CaseStudyCta />
    </>
  );
}
