import type { WorkCard } from "@/lib/works";

export default function WorkCardMedia({ work }: { work: WorkCard }) {
  if (work.image) {
    return (
      <img
        src={work.image}
        alt={work.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#111] px-4">
      <span className="text-center font-[var(--font-syne)] text-sm font-extrabold uppercase tracking-[0.18em] text-white/[0.15] md:text-base">
        {work.placeholder}
      </span>
    </div>
  );
}
