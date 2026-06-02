import {
  WorkCard,
  WorkImage,
  WorkPlaceholder,
} from "@/components/WorkCard";
import { works, type WorkItem } from "@/lib/works";

function renderMedia(work: WorkItem) {
  if (work.type === "image" && work.image) {
    return <WorkImage src={work.image} alt={work.name} />;
  }
  if (work.type === "gradient") {
    return (
      <WorkPlaceholder title={work.gradientLabel ?? work.name} />
    );
  }
  return (
    <WorkPlaceholder
      title="MYRAL."
      subtitle="Fotos próximamente"
      dark
    />
  );
}

type WorksGridProps = {
  large?: boolean;
  layout?: "home" | "full";
};

export function WorksGrid({ large = false, layout = "full" }: WorksGridProps) {
  if (layout === "home") {
    const row1 = works.slice(0, 3);
    const row2 = works.slice(3, 5);

    return (
      <div className="space-y-px bg-border">
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {row1.map((work) => (
            <WorkCard
              key={work.slug}
              href={work.href}
              badge={work.badge}
              name={work.name}
              description={work.description}
              large={large}
              media={renderMedia(work)}
            />
          ))}
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-px bg-border md:grid-cols-2">
          {row2.map((work) => (
            <WorkCard
              key={work.slug}
              href={work.href}
              badge={work.badge}
              name={work.name}
              description={work.description}
              large={large}
              media={renderMedia(work)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
      {works.map((work) => (
        <WorkCard
          key={work.slug}
          href={work.href}
          badge={work.badge}
          name={work.name}
          description={work.description}
          large={large}
          media={renderMedia(work)}
        />
      ))}
    </div>
  );
}
