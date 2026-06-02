export type WorkItem = {
  slug: string;
  name: string;
  badge: string;
  description: string;
  href: string;
  type: "image" | "gradient" | "dark";
  image?: string;
  gradientLabel?: string;
};

export const works: WorkItem[] = [
  {
    slug: "antonio-barrul",
    name: "Antonio Barrul",
    badge: "Producción Audiovisual",
    description:
      "Anuncio del primer combate europeo de Antonio Barrul. Producción cinematográfica de alto impacto.",
    href: "/trabajos/antonio-barrul",
    type: "image",
    image: "/images/barrul.png",
  },
  {
    slug: "ichi",
    name: "Itziar Martínez",
    badge: "Contenido Deportivo",
    description:
      "Cobertura audiovisual de la escaladora española top 20 mundial en competiciones internacionales.",
    href: "/trabajos/ichi",
    type: "image",
    image: "/images/ichi.png",
  },
  {
    slug: "run-run-social-club",
    name: "Run Run Social Club",
    badge: "Influencer Marketing",
    description:
      "Campaña de colaboración entre marca de suplementos y comunidad de runners.",
    href: "/trabajos/run-run-social-club",
    type: "gradient",
    gradientLabel: "RUN RUN × SANTA MADRE",
  },
  {
    slug: "leyendas-del-vallenato",
    name: "Festival Leyendas del Vallenato",
    badge: "Gestión de Evento",
    description:
      "2.500 asistentes. Gestión integral remota desde Innsbruck a 1.788 km de distancia.",
    href: "/trabajos/leyendas-del-vallenato",
    type: "dark",
  },
  {
    slug: "vermuteria-cervantes",
    name: "Vermutería Cervantes",
    badge: "Social Media",
    description:
      "De 200 a 2.000 seguidores en menos de un año. Comunidad activa y reservas constantes.",
    href: "/trabajos/vermuteria-cervantes",
    type: "image",
    image: "/images/cervantes-despues.png",
  },
];
