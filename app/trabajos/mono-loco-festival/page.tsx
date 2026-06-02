import {
  CaseStudyCta,
  CaseStudyImageHero,
  CaseStudyIntro,
  CaseStudyResults,
  CaseStudyReto,
  CaseStudyWhatWeDid,
} from "@/components/case-study/CaseStudySections";

const gallery = [
  "/images/monoloco-1.png",
  "/images/monoloco-2.png",
  "/images/monoloco-3.png",
  "/images/monoloco-4.png",
] as const;

export default function MonoLocoFestivalPage() {
  return (
    <>
      <CaseStudyImageHero
        src="/images/monoloco-1.png"
        alt="Mono Loco Festival"
        badge="Gestión Integral de Evento · León · 2024"
        title="Mono Loco Festival"
        subtitle="16.000 personas. Un solo escenario."
        gradient
      />

      <section className="section-pad section-alt reveal">
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2">
          {gallery.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden bg-[var(--bg)]">
              <img src={src} alt="Mono Loco Festival" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <CaseStudyIntro>
        El Mono Loco Festival es uno de los eventos de música y ocio más grandes de León. Con un aforo de 16.000
        personas, la organización exige un nivel de coordinación, comunicación y logística que va mucho más allá de lo
        que cualquier agencia convencional puede ofrecer. MYRAL asumió la gestión integral del evento.
      </CaseStudyIntro>

      <CaseStudyReto>
        Coordinar un evento de 16.000 personas requiere sistemas, no improvisación. La comunicación tiene que llegar al
        público correcto en el momento correcto, las entradas tienen que venderse con antelación suficiente para cubrir
        costes fijos, y el día del evento todo tiene que funcionar como un reloj.
      </CaseStudyReto>

      <CaseStudyWhatWeDid
        items={[
          "Estrategia de comunicación y campaña en redes sociales",
          "Gestión de la comunidad online antes, durante y después del evento",
          "Campañas Meta Ads segmentadas por edad, intereses y localización",
          "Producción de contenido audiovisual para promoción",
          "Cobertura en directo del evento en redes sociales",
          "Gestión de RRPP y relaciones con medios locales",
        ]}
      />

      <CaseStudyResults
        stats={[
          ["16.000", "Asistentes — aforo completo"],
          ["Top", "Evento del año en León"],
          ["Sold out", "Entradas agotadas antes del evento"],
        ]}
        quote="Uno de los eventos más grandes de León gestionado por MYRAL. Cuando el aforo importa, los sistemas importan más."
      />

      <CaseStudyCta />
    </>
  );
}
