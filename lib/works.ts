export type WorkCard = {
  href: string;
  badge: string;
  name: string;
  desc: string;
  image?: string;
  /** Vídeo corto en bucle (sin audio) para la tarjeta */
  video?: string;
  placeholder?: string;
  featured?: boolean;
  /** Sector, para el archivo */
  sector: string;
};

export const works: WorkCard[] = [
  {
    href: "/trabajos/jakob-schubert",
    badge: "Deporte · Escalada",
    name: "Jakob Schubert",
    desc: "Reel para el campeón del mundo de escalada. Fuerza, detalle y ritmo.",
    image: "/media/jakob-poster.jpg",
    video: "/media/jakob-loop.mp4",
    featured: true,
    sector: "Deporte",
  },
  {
    href: "/trabajos/conciertos-europa-fm",
    badge: "Conciertos · Radio",
    name: "Europa FM · Onda Cero",
    desc: "Fangoria, Marlena, Bombai, Paula Koops. Reel la misma noche, aftermovie a la mañana siguiente.",
    image: "/media/fangoria-poster.jpg",
    video: "/media/fangoria-loop.mp4",
    featured: true,
    sector: "Música",
  },
  {
    href: "/trabajos/bodegas",
    badge: "Vino · Contenido",
    name: "Bodegas de Ribera y León",
    desc: "San Cobate, Señorío de Nava, Fuentenebro, Vile la Finca y Marcela Brasa y Vinos.",
    image: "/media/vile-poster.jpg",
    video: "/media/vile-loop.mp4",
    featured: true,
    sector: "Vino y gastronomía",
  },
  {
    href: "/trabajos/ichi",
    badge: "Deporte · Escalada",
    name: "Iziar Martínez",
    desc: "Copa del Mundo y entrenamiento de la escaladora española top 20 mundial.",
    image: "/media/ichi-poster.jpg",
    video: "/media/ichi-loop.mp4",
    featured: true,
    sector: "Deporte",
  },
  {
    href: "/trabajos/verdiago-vive",
    badge: "Turismo · Contenido",
    name: "Verdiago Vive",
    desc: "Hotel rural y spa en la montaña de León. Rodaje trimestral, kit de marca y redes.",
    image: "/media/verdiago-poster.jpg",
    video: "/media/verdiago-loop.mp4",
    featured: true,
    sector: "Turismo",
  },
  {
    href: "/trabajos/antonio-barrul",
    badge: "Deporte · Boxeo",
    name: "Antonio Barrul",
    desc: "Anuncio del primer combate europeo. Producción cinematográfica de alto impacto.",
    image: "/images/barrul-campeon.png",
    featured: true,
    sector: "Deporte",
  },
  {
    href: "/trabajos/leon-solo-musica",
    badge: "Música · Evento",
    name: "León Solo Música",
    desc: "Cobertura del evento y piezas para patrocinadores en horizontal y vertical.",
    image: "/media/lsm-poster.jpg",
    video: "/media/lsm-loop.mp4",
    featured: true,
    sector: "Música",
  },
  {
    href: "/trabajos/mono-loco-festival",
    badge: "Gestión de Evento",
    name: "Mono Loco Festival",
    desc: "16.000 asistentes. Gestión integral del evento más grande de León.",
    image: "/images/monoloco-1.png",
    featured: true,
    sector: "Eventos",
  },
  {
    href: "/trabajos/fele-leon-es-comercio",
    badge: "Campaña · Institucional",
    name: "FELE · León es Comercio",
    desc: "Vídeos de campaña para la Federación Leonesa de Empresarios.",
    image: "/media/fele-poster.jpg",
    video: "/media/fele-loop.mp4",
    sector: "Institucional",
  },
  {
    href: "/trabajos/conciertos-europa-fm#leon-street-music",
    badge: "Música · Calle",
    name: "León Street Music",
    desc: "Música en la calle, contada en reels y vídeo final.",
    image: "/media/lstreet-poster.jpg",
    video: "/media/lstreet-loop.mp4",
    sector: "Música",
  },
  {
    href: "/trabajos/vermuteria-cervantes",
    badge: "Social Media",
    name: "Vermutería Cervantes",
    desc: "De 200 a 2.000 seguidores en menos de un año.",
    image: "/images/cervantes-mesa.png",
    sector: "Hostelería",
  },
  {
    href: "/trabajos/leyendas-del-vallenato",
    badge: "Gestión de Evento",
    name: "Leyendas del Vallenato",
    desc: "2.500 asistentes. Gestión integral de festival en León.",
    placeholder: "MYRAL.",
    sector: "Eventos",
  },
  {
    href: "/trabajos/run-run-social-club",
    badge: "Influencer Marketing",
    name: "Run Run Social Club × Santa Madre",
    desc: "Campaña de colaboración entre marca de suplementos y comunidad de runners.",
    image: "/images/runrun-thumb.png",
    sector: "Deporte",
  },
  {
    href: "/trabajos/camarote-hotel",
    badge: "Branding & Social Media",
    name: "Camarote Hotel",
    desc: "Identidad visual y presencia online para hotel boutique en León.",
    image: "/images/camarote-hab.png",
    sector: "Turismo",
  },
  {
    href: "/trabajos/el-loco-de-las-tortillas",
    badge: "Social Media",
    name: "El Loco de las Tortillas",
    desc: "Redes sociales con la energía y el carácter único del local en Oviedo.",
    image: "/images/loco-terraza.png",
    sector: "Hostelería",
  },
  {
    href: "/trabajos/bares-del-mono",
    badge: "Social Media & Eventos",
    name: "Bares del Mono",
    desc: "Deseo del Mono y Leña al Mono. Tardeos, eventos y comunidad online.",
    image: "/images/mono-burger.png",
    sector: "Hostelería",
  },
  {
    href: "/trabajos/pizzeria-y-coma",
    badge: "Social Media",
    name: "Pizzería y Coma",
    desc: "Presencia en redes a la altura de su propuesta gastronómica en León.",
    image: "/images/pizza-champinones.png",
    sector: "Hostelería",
  },
  {
    href: "/trabajos/el-puntazo",
    badge: "Social Media",
    name: "El Puntazo",
    desc: "Visibilidad digital para el bar de tapas que León tenía que conocer.",
    image: "/images/puntazo-tapas.png",
    sector: "Hostelería",
  },
  {
    href: "/trabajos/leon-marino",
    badge: "Branding & Social Media",
    name: "León Marino",
    desc: "Buceo en Tarifa. Contenido visual que transmite la experiencia.",
    image: "/images/marino-buzos.png",
    sector: "Turismo",
  },
];

export const featuredWorks = works.filter((w) => w.featured);

/** Marcas y artistas con los que hemos trabajado (franja de clientes) */
export const clientNames = [
  "Europa FM",
  "Onda Cero",
  "Fangoria",
  "Marlena",
  "Bombai",
  "Paula Koops",
  "Jakob Schubert",
  "Iziar Martínez",
  "Antonio Barrul",
  "San Cobate",
  "Señorío de Nava",
  "Fuentenebro",
  "Vile la Finca",
  "Marcela Brasa y Vinos",
  "Verdiago Vive",
  "FELE",
  "León Solo Música",
  "Mono Loco Festival",
  "Camarote Hotel",
] as const;
