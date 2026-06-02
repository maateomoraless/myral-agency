import Link from "next/link";
import type { ReactNode } from "react";

type HomeWorkCardProps = {
  href: string;
  name: string;
  description: string;
  media: ReactNode;
};

export function HomeWorkCard({
  href,
  name,
  description,
  media,
}: HomeWorkCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="overflow-hidden border border-border bg-bg transition-colors hover:border-yellow/20">
        <div className="relative aspect-video w-full overflow-hidden">
          {media}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-yellow">
            {name}
          </h3>
          <p className="mt-2 line-clamp-1 text-sm text-white/40">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
