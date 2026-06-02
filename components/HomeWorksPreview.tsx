import { HomeWorkCard } from "@/components/HomeWorkCard";
import { WorkImage, WorkPlaceholder } from "@/components/WorkCard";
import { works } from "@/lib/works";

const homeDescriptions: Record<string, string> = {
  "antonio-barrul":
    "Anuncio cinematográfico del primer combate europeo de Antonio Barrul.",
  ichi: "Cobertura audiovisual de la escaladora top 20 mundial en competiciones internacionales.",
  "run-run-social-club":
    "Colaboración entre marca de suplementos y comunidad de runners.",
  "leyendas-del-vallenato":
    "2.500 asistentes. Gestión integral remota desde Innsbruck.",
  "vermuteria-cervantes":
    "De 200 a 2.000 seguidores en menos de un año.",
};

function renderMedia(work: (typeof works)[0]) {
  if (work.type === "image" && work.image) {
    return <WorkImage src={work.image} alt={work.name} />;
  }
  if (work.type === "gradient") {
    return (
      <WorkPlaceholder title={work.gradientLabel ?? work.name} />
    );
  }
  return (
    <WorkPlaceholder title="MYRAL." subtitle="Fotos próximamente" dark />
  );
}

export function HomeWorksPreview() {
  const row1 = works.slice(0, 3);
  const row2 = works.slice(3, 5);

  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        {row1.map((work) => (
          <HomeWorkCard
            key={work.slug}
            href={work.href}
            name={work.name}
            description={homeDescriptions[work.slug] ?? work.description}
            media={renderMedia(work)}
          />
        ))}
      </div>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
        {row2.map((work) => (
          <HomeWorkCard
            key={work.slug}
            href={work.href}
            name={work.name}
            description={homeDescriptions[work.slug] ?? work.description}
            media={renderMedia(work)}
          />
        ))}
      </div>
    </div>
  );
}
