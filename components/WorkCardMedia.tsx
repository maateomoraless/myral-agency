import type { WorkCard } from "@/lib/works";

const imageClassName =
  "work-card-image h-full w-full object-cover max-md:absolute max-md:inset-0 max-md:h-full max-md:w-full";

export default function WorkCardMedia({ work }: { work: WorkCard }) {
  if (work.image) {
    return (
      <img
        src={work.image}
        alt={work.name}
        loading="lazy"
        className={imageClassName}
      />
    );
  }

  return (
    <div className="work-card-placeholder flex h-full w-full items-center justify-center bg-[#111] px-4 max-md:absolute max-md:inset-0">
      <span className="text-center font-[var(--font-syne)] text-sm font-extrabold uppercase tracking-[0.18em] text-white/[0.15] md:text-base">
        {work.placeholder}
      </span>
    </div>
  );
}
