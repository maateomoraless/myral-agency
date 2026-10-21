export type Lang = "en" | "es";
type L = Record<Lang, string>;

export type Project = {
  slug: string;
  title: string;
  client: string;
  year?: string;
  role: L;
  format: string;
  line: L;
  /** "v" vertical 9:16, "h" horizontal 16:9 */
  orientation: "v" | "h";
  video?: string;
  poster: string;
  stills: string[];
};

export const projects: Project[] = [
  {
    slug: "jakob-schubert",
    title: "Jakob Schubert",
    client: "Jakob Schubert",
    role: { en: "Filming · Edit", es: "Rodaje · Edición" },
    format: "Reel 9:16 · 4K",
    line: {
      en: "World champion. Shot close, cut to the rhythm of every move.",
      es: "Campeón del mundo. Rodado de cerca, montado al ritmo de cada movimiento.",
    },
    orientation: "v",
    video: "/media/v2/jakob.mp4",
    poster: "/media/v2/jakob.jpg",
    stills: [1, 2, 3, 4, 5, 6].map((n) => `/media/v2/jakob-still-${n}.jpg`),
  },
  {
    slug: "europa-fm",
    title: "Europa FM",
    client: "Europa FM · Onda Cero",
    year: "2026",
    role: { en: "Filming · Edit · Photo", es: "Rodaje · Edición · Foto" },
    format: "Aftermovie 16:9 · Reel 9:16",
    line: {
      en: "Fangoria, Marlena, Bombai, Paula Koops. The reel goes out the same night.",
      es: "Fangoria, Marlena, Bombai, Paula Koops. El reel sale esa misma noche.",
    },
    orientation: "h",
    video: "/media/v2/europafm.mp4",
    poster: "/media/v2/europafm.jpg",
    stills: [],
  },
  {
    slug: "iziar-martinez",
    title: "Iziar Martínez",
    client: "Iziar Martínez",
    year: "2026",
    role: { en: "Production · Filming · Edit", es: "Producción · Rodaje · Edición" },
    format: "Reels 9:16",
    line: {
      en: "World Cup climber. The wall, the nerves, the smile after.",
      es: "Escaladora de Copa del Mundo. La pared, los nervios y la sonrisa después.",
    },
    orientation: "v",
    video: "/media/v2/ichi.mp4",
    poster: "/media/v2/ichi.jpg",
    stills: [],
  },
  {
    slug: "bodegas",
    title: "Bodegas",
    client: "San Cobate · Señorío de Nava · Fuentenebro · Vile la Finca · Marcela",
    year: "2026",
    role: { en: "Scripts · Filming · Edit · Photo", es: "Guion · Rodaje · Edición · Foto" },
    format: "Reels 9:16 · Photo",
    line: {
      en: "Four wineries and a restaurant. From the vine to the glass.",
      es: "Cuatro bodegas y un restaurante. De la viña a la copa.",
    },
    orientation: "v",
    video: "/media/v2/bodegas.mp4",
    poster: "/media/v2/bodegas.jpg",
    stills: [],
  },
  {
    slug: "antonio-barrul",
    title: "Antonio Barrul",
    client: "Antonio Barrul",
    role: { en: "Production · Edit", es: "Producción · Edición" },
    format: "Fight announcement",
    line: {
      en: "His first European title fight, announced like a film trailer.",
      es: "Su primer combate europeo, anunciado como el tráiler de una película.",
    },
    orientation: "h",
    poster: "/images/barrul-campeon.png",
    stills: ["/images/barrul-ring.png", "/images/barrul-equipo.png", "/images/barrul-campeon.png"],
  },
  {
    slug: "verdiago-vive",
    title: "Verdiago Vive",
    client: "Verdiago Vive",
    year: "2026",
    role: { en: "Strategy · Filming · Edit · Social", es: "Estrategia · Rodaje · Edición · Redes" },
    format: "Reels 9:16 · Photo · Brand kit",
    line: {
      en: "A mountain village brought back to life, one season at a time.",
      es: "Un pueblo de montaña que vuelve a vivir, estación a estación.",
    },
    orientation: "v",
    video: "/media/v2/verdiago.mp4",
    poster: "/media/v2/verdiago.jpg",
    stills: [],
  },
  {
    slug: "leon-solo-musica",
    title: "Solo Música",
    client: "León Solo Música",
    year: "2026",
    role: { en: "Filming · Edit", es: "Rodaje · Edición" },
    format: "Film 16:9 · 9:16",
    line: {
      en: "One night of live music, cut for the stage and for the sponsors.",
      es: "Una noche de música en directo, montada para el escenario y para los patrocinadores.",
    },
    orientation: "h",
    video: "/media/v2/lsm.mp4",
    poster: "/media/v2/lsm.jpg",
    stills: [],
  },
  {
    slug: "mono-loco",
    title: "Mono Loco",
    client: "Mono Loco Festival",
    role: { en: "Event management · Content", es: "Gestión del evento · Contenido" },
    format: "Festival · 16,000 people",
    line: {
      en: "Sixteen thousand people. One festival.",
      es: "Dieciséis mil personas. Un festival.",
    },
    orientation: "h",
    poster: "/images/monoloco-1.png",
    stills: ["/images/monoloco-2.png", "/images/monoloco-3.png", "/images/monoloco-4.png"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const ui = {
  work: { en: "Work", es: "Trabajo" },
  studio: { en: "Studio", es: "Estudio" },
  contact: { en: "Contact", es: "Contacto" },
  worldwide: { en: "Worldwide", es: "Worldwide" },
  index: { en: "Index", es: "Índice" },
  view: { en: "View", es: "Ver" },
  client: { en: "Client", es: "Cliente" },
  year: { en: "Year", es: "Año" },
  role: { en: "Role", es: "Rol" },
  format: { en: "Format", es: "Formato" },
  next: { en: "Next", es: "Siguiente" },
  back: { en: "Index", es: "Índice" },
  enter: { en: "Tap to enter", es: "Toca para entrar" },
  frames: { en: "Frames", es: "Fotogramas" },
  drag: { en: "Drag", es: "Arrastra" },
} satisfies Record<string, L>;
