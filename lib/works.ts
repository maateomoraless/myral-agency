export type WorkCard = {
  href: string;
  badge: string;
  name: string;
  desc: string;
  image?: string;
  video?: string;
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
    name: "Iziar Martínez",
    desc: "Cobertura de la escaladora española top 20 mundial en competiciones internacionales.",
    image: "/images/ichi-roca.png",
    video: "/work/ichi/ichi-loop.mp4",
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
    href: "/trabajos/europa-fm",
    badge: "Cobertura de Eventos",
    name: "Europa FM · Conciertos",
    desc: "Fangoria, Paula Koops, Marlena, Bombai y Palencia. Reel la misma noche, aftermovie al día siguiente.",
    image: "/work/europa-fm/fangoria-poster.jpg",
    video: "/work/europa-fm/fangoria-loop.mp4",
  },
  {
    href: "/trabajos/jakob-schubert",
    badge: "Contenido Deportivo",
    name: "Jakob Schubert",
    desc: "Edición de vídeo para uno de los mejores escaladores del mundo.",
    image: "/work/jakob-schubert/still-2.jpg",
  },
  {
    href: "/trabajos/leon-solo-musica",
    badge: "Producción Audiovisual",
    name: "León Solo Música",
    desc: "Grabación de conciertos y aftermovie para redes.",
    image: "/work/leon-solo-musica/lsm-poster.jpg",
    video: "/work/leon-solo-musica/lsm-loop.mp4",
  },
  {
    href: "/trabajos/verdiago-vive",
    badge: "Social Media",
    name: "Verdiago Vive",
    desc: "Hotel rural, spa y restaurante en la montaña de León. Contenido y redes cada mes.",
    image: "/work/verdiago-vive/verdiago-poster.jpg",
    video: "/work/verdiago-vive/verdiago-loop.mp4",
  },
  {
    href: "/trabajos/bodegas",
    badge: "Producción de Contenido",
    name: "Bodegas",
    desc: "San Cobate, Señorío de Nava, Fuentenebro y Vile la Finca. Reels, dron y fotografía en viñedo y bodega.",
    image: "/work/bodegas/sancobate-poster.jpg",
    video: "/work/bodegas/sancobate-loop.mp4",
  },
  {
    href: "/trabajos/marcela-brasa-y-vinos",
    badge: "Social Media",
    name: "Marcela Brasa y Vinos",
    desc: "Contenido mensual para restaurante de brasa y vino.",
    image: "/work/marcela-brasa-y-vinos/vino-poster.jpg",
    video: "/work/marcela-brasa-y-vinos/vino-loop.mp4",
  },
  {
    href: "/trabajos/fele-leon-es-comercio",
    badge: "Producción Audiovisual",
    name: "FELE · León es Comercio",
    desc: "Vídeos de la campaña de la Federación Leonesa de Empresarios.",
    image: "/work/fele-leon-es-comercio/fele-poster.jpg",
    video: "/work/fele-leon-es-comercio/fele-loop.mp4",
  },
  {
    href: "/trabajos/leon-street-music",
    badge: "Producción Audiovisual",
    name: "León Street Music",
    desc: "Vídeo promocional grabado en las calles de León.",
    image: "/work/leon-street-music/lstreet-poster.jpg",
    video: "/work/leon-street-music/lstreet-loop.mp4",
  },
  {
    href: "/trabajos/leyendas-del-vallenato",
    badge: "Gestión de Evento",
    name: "Leyendas del Vallenato",
    desc: "2.500 asistentes. Gestión integral de festival en León.",
    placeholder: "MYRAL.",
  },
  {
    href: "/trabajos/run-run-social-club",
    badge: "Influencer Marketing",
    name: "Run Run Social Club × Santa Madre",
    desc: "Campaña de colaboración entre marca de suplementos y comunidad de runners.",
    image: "/images/runrun-thumb.png",
  },
  {
    href: "/trabajos/camarote-hotel",
    badge: "Branding & Social Media",
    name: "Camarote Hotel",
    desc: "Identidad visual y presencia online para hotel boutique en León.",
    image: "/images/camarote-hab.png",
  },
  {
    href: "/trabajos/el-loco-de-las-tortillas",
    badge: "Social Media",
    name: "El Loco de las Tortillas",
    desc: "Redes sociales con la energía y el carácter único del local en Oviedo.",
    image: "/images/loco-terraza.png",
  },
  {
    href: "/trabajos/bares-del-mono",
    badge: "Social Media & Eventos",
    name: "Bares del Mono",
    desc: "Deseo del Mono y Leña al Mono. Tardeos, eventos y comunidad online.",
    image: "/images/mono-burger.png",
  },
  {
    href: "/trabajos/pizzeria-y-coma",
    badge: "Social Media",
    name: "Pizzería y Coma",
    desc: "Presencia en redes a la altura de su propuesta gastronómica en León.",
    image: "/images/pizza-champinones.png",
  },
  {
    href: "/trabajos/el-puntazo",
    badge: "Social Media",
    name: "El Puntazo",
    desc: "Visibilidad digital para el bar de tapas que León tenía que conocer.",
    image: "/images/puntazo-tapas.png",
  },
  {
    href: "/trabajos/leon-marino",
    badge: "Branding & Social Media",
    name: "León Marino",
    desc: "Buceo en Tarifa. Contenido visual que transmite la experiencia.",
    image: "/images/marino-buzos.png",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
