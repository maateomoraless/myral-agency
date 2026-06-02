import {
  CaseStudyCta,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyTextHero,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

export default function BaresDelMonoPage() {
  return (
    <>
      <CaseStudyTextHero
        watermark="BARES DEL MONO"
        badge="Social Media & Eventos · León"
        title="Bares del Mono"
        subtitle="Deseo del Mono. Leña al Mono. Llenos."
      />

      <CaseStudyIntro>
        Bares del Mono gestiona dos locales en León con personalidades distintas pero un mismo objetivo: estar llenos
        cada fin de semana. MYRAL se encargó de la gestión de redes sociales y la comunicación de sus eventos de tardeo.
      </CaseStudyIntro>

      <CaseStudyWhatWeDid
        items={[
          "Gestión de redes sociales para Deseo del Mono y Leña al Mono",
          "Comunicación de eventos y tardeos semanales",
          "Producción de contenido para Instagram y TikTok",
          "Campañas de Meta Ads para eventos especiales",
        ]}
      />

      <CaseStudyResults quote="Tardeos con lista de espera y una comunidad online que espera cada semana el siguiente evento." />

      <CaseStudyCta />
    </>
  );
}
