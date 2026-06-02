import {
  CaseStudyCta,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyTextHero,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

export default function PizzeriaYComaPage() {
  return (
    <>
      <CaseStudyTextHero
        watermark="PIZZERÍA Y COMA"
        badge="Social Media · León"
        title="Pizzería y Coma"
        subtitle="Buena pizza. Mejor presencia online."
      />

      <CaseStudyIntro>
        Pizzería y Coma es un local de León con una propuesta gastronómica sólida que necesitaba una presencia en redes a
        la altura. MYRAL se encargó de construir su comunidad online y atraer nuevos clientes.
      </CaseStudyIntro>

      <CaseStudyWhatWeDid
        items={[
          "Estrategia y gestión mensual de Instagram",
          "Fotografía gastronómica de producto",
          "Producción de reels y contenido dinámico",
          "Gestión de la comunidad y respuesta a comentarios",
        ]}
      />

      <CaseStudyResults quote="Más visibilidad, más reservas y una comunidad que recomienda el local." />

      <CaseStudyCta />
    </>
  );
}
