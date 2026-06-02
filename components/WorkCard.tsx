import Link from "next/link";
import type { ReactNode } from "react";

type WorkCardProps = {
  href: string;
  badge: string;
  name: string;
  description: string;
  media: ReactNode;
  large?: boolean;
};

export function WorkCard({
  href,
  badge,
  name,
  description,
  media,
  large = false,
}: WorkCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden border border-border bg-bg transition-colors hover:border-yellow/20 hover:bg-yellow/[0.02]">
        <div className={`relative overflow-hidden ${large ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
          {media}
        </div>
        <div className={`flex flex-1 flex-col ${large ? "p-8" : "p-6"}`}>
          <span className="mb-3 inline-block w-fit bg-yellow/10 px-2.5 py-1 text-[8px] uppercase tracking-[0.16em] text-yellow">
            {badge}
          </span>
          <h3
            className={`mb-2 font-syne font-semibold text-cream transition-colors group-hover:text-yellow ${
              large ? "text-xl" : "text-base"
            }`}
          >
            {name}
          </h3>
          <p className="text-[11px] leading-[1.72] text-muted">{description}</p>
          <span className="mt-4 text-[9px] uppercase tracking-[0.14em] text-yellow/70">
            Ver proyecto →
          </span>
        </div>
      </article>
    </Link>
  );
}

export function WorkImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );
}

export function WorkPlaceholder({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex h-full min-h-full w-full flex-col items-center justify-center px-6 ${
        dark ? "bg-[#111111]" : ""
      }`}
      style={
        dark
          ? undefined
          : {
              background:
                "linear-gradient(135deg, #05050b 0%, #0a0a14 45%, #12121f 100%)",
            }
      }
    >
      <p
        className={`text-center font-syne font-bold uppercase tracking-[0.2em] text-white ${
          dark ? "text-3xl opacity-[0.15]" : "text-sm sm:text-base"
        }`}
      >
        {title}
      </p>
      {subtitle && (
        <p className="mt-3 text-[8px] uppercase tracking-[0.15em] text-cream/25">
          {subtitle}
        </p>
      )}
    </div>
  );
}
