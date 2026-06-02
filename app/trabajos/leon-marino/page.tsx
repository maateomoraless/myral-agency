import {
  CaseStudyCta,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyTextHero,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

export default function LeonMarinoPage() {
  return (
    <>
      <CaseStudyTextHero
        watermark="LEÓN MARINO"
        badge="Branding & Social Media · Tarifa"
        title="León Marino"
        subtitle="Buceo en Tarifa. Contado como merece."
      />

      <CaseStudyIntro>
        León Marino es una escuela de buceo en Tarifa, uno de los destinos de buceo más interesantes de España. Con un
        entorno visual privilegiado — el mar, la fauna submarina, la luz del sur — MYRAL desarrolló una estrategia de
        contenido que aprovechara al máximo ese potencial.
      </CaseStudyIntro>

      <CaseStudyWhatWeDid
        items={[
          "Estrategia de contenido para redes sociales",
          "Gestión de Instagram orientada a captar alumnos y clientes",
          "Producción de contenido visual aprovechando el entorno natural",
          "Posicionamiento de marca en el sector del buceo y los deportes acuáticos",
        ]}
      />

      <CaseStudyResults quote="Una presencia online que transmite la experiencia del buceo en Tarifa y atrae a nuevos alumnos." />

      <CaseStudyCta />
    </>
  );
}
