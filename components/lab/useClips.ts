import { projects } from "@/lib/projects";

export const clips = [
  {
    slug: "",
    title: "MYRAL",
    client: "Showreel",
    video: "/media/showreel-1080.mp4",
    poster: "/media/showreel-poster.jpg",
    tag: "Film · Content · Social",
  },
  ...projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    client: p.client,
    video: p.video,
    poster: p.poster,
    tag: p.role.en,
  })),
];

export const statement = "We film, edit and run social for brands, artists and athletes.";
