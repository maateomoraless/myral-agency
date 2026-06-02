import {
  CaseStudyCta,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyReto,
  CaseStudyTextHero,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

export default function CamaroteHotelPage() {
  return (
    <>
      <CaseStudyTextHero
        watermark="CAMAROTE HOTEL"
        badge="Branding & Social Media · León"
        title="Camarote Hotel"
        subtitle="Una identidad visual que se recuerda."
      />

      <CaseStudyIntro>
        Camarote Hotel es un hotel boutique en León con una personalidad única. Cuando llegaron a MYRAL necesitaban que
        su presencia online reflejara la calidad y el carácter de su propuesta. No era solo gestionar redes — era
        construir una identidad visual coherente y atractiva.
      </CaseStudyIntro>

      <CaseStudyReto>
        El sector hotelero en León es competitivo y los viajeros deciden dónde alojarse basándose en gran medida en lo
        que ven en Instagram y Google. La imagen tenía que transmitir experiencia, no solo habitaciones.
      </CaseStudyReto>

      <CaseStudyWhatWeDid
        items={[
          "Desarrollo de identidad visual para redes sociales",
          "Estrategia de contenido orientada a viajeros",
          "Fotografía de instalaciones y espacios",
          "Gestión mensual de Instagram",
          "Respuesta a reseñas y gestión de reputación online",
        ]}
      />

      <CaseStudyResults quote="Una presencia online coherente y atractiva que convierte visitas en reservas." />

      <CaseStudyCta />
    </>
  );
}
