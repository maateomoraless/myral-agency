export type WorkCard = {
  href: string;
  badge: string;
  name: string;
  desc: string;
  image?: string;
  placeholder?: string;
  featured?: boolean;
};

export const works: WorkCard[] = [
  {
    href: "/trabajos/antonio-barrul",
    badge: "Producción Audiovisual",
    name: "Antonio Barrul",
    desc: "Anuncio del primer combate europeo. Producción cinematográfica de alto impacto.",
    image: "/images/barrul-campeon.png",
    featured: true,
  },
  {
    href: "/trabajos/ichi",
    badge: "Contenido Deportivo",
    name: "Itziar Martínez",
    desc: "Cobertura de la escaladora española top 20 mundial en competiciones internacionales.",
    image: "/images/ichi-roca.png",
    featured: true,
  },
  {
    href: "/trabajos/mono-loco-festival",
    badge: "Gestión de Evento",
    name: "Mono Loco Festival",
    desc: "16.000 asistentes. Gestión integral del evento más grande de León.",
    image: "/images/monoloco-1.png",
    featured: true,
  },
  {
    href: "/trabajos/vermuteria-cervantes",
    badge: "Social Media",
    name: "Vermutería Cervantes",
    desc: "De 200 a 2.000 seguidores en menos de un año.",
    image: "/images/cervantes-mesa.png",
    featured: true,
  },
  {
    href: "/trabajos/leyendas-del-vallenato",
    badge: "Gestión de Evento",
    name: "Leyendas del Vallenato",
    desc: "2.500 asistentes. Gestión integral remota desde Innsbruck a 1.788km.",
    placeholder: "MYRAL.",
  },
  {
    href: "/trabajos/run-run-social-club",
    badge: "Influencer Marketing",
    name: "Run Run Social Club × Santa Madre",
    desc: "Campaña de colaboración entre marca de suplementos y comunidad de runners.",
    placeholder: "RUN RUN × SANTA MADRE",
  },
  {
    href: "/trabajos/camarote-hotel",
    badge: "Branding & Social Media",
    name: "Camarote Hotel",
    desc: "Identidad visual y presencia online para hotel boutique en León.",
    placeholder: "CAMAROTE HOTEL",
  },
  {
    href: "/trabajos/el-loco-de-las-tortillas",
    badge: "Social Media",
    name: "El Loco de las Tortillas",
    desc: "Redes sociales con la energía y el carácter único del local en Oviedo.",
    placeholder: "EL LOCO DE LAS TORTILLAS",
  },
  {
    href: "/trabajos/bares-del-mono",
    badge: "Social Media & Eventos",
    name: "Bares del Mono",
    desc: "Deseo del Mono y Leña al Mono. Tardeos, eventos y comunidad online.",
    placeholder: "BARES DEL MONO",
  },
  {
    href: "/trabajos/pizzeria-y-coma",
    badge: "Social Media",
    name: "Pizzería y Coma",
    desc: "Presencia en redes a la altura de su propuesta gastronómica en León.",
    placeholder: "PIZZERÍA Y COMA",
  },
  {
    href: "/trabajos/el-puntazo",
    badge: "Social Media",
    name: "El Puntazo",
    desc: "Visibilidad digital para el bar de tapas que León tenía que conocer.",
    placeholder: "EL PUNTAZO",
  },
  {
    href: "/trabajos/comida-nocturna-rapida",
    badge: "Social Media",
    name: "Comida Nocturna Rápida",
    desc: "Estrategia de contenido para el público nocturno de León.",
    placeholder: "COMIDA NOCTURNA RÁPIDA",
  },
  {
    href: "/trabajos/leon-marino",
    badge: "Branding & Social Media",
    name: "León Marino",
    desc: "Buceo en Tarifa. Contenido visual que transmite la experiencia.",
    placeholder: "LEÓN MARINO",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
