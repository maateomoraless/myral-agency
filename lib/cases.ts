export type CaseVideo = { src: string; poster: string; label: string };

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  heroVideo: string;
  heroPoster: string;
  intro: string;
  /** Datos clave: solo hechos verificables (entregables, plazos, volumen) */
  facts: { label: string; value: string }[];
  whatWeDid: string[];
  gallery: CaseVideo[];
  /** Bloque adicional opcional (p. ej. otro cliente relacionado) */
  extra?: { id: string; title: string; text: string; video: CaseVideo };
  cta: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "jakob-schubert",
    eyebrow: "Deporte · Escalada",
    title: "Jakob Schubert",
    tagline: "La fuerza, en detalle.",
    heroVideo: "/media/jakob-hero.mp4",
    heroPoster: "/media/jakob-poster.jpg",
    intro:
      "Jakob Schubert es uno de los escaladores más laureados del mundo. Rodamos y editamos una pieza vertical pensada para redes: planos cerrados de manos, presas y respiración, y un montaje que sigue el ritmo de cada movimiento.",
    facts: [
      { label: "Formato", value: "Reel vertical 4K" },
      { label: "Destino", value: "Instagram" },
      { label: "Servicio", value: "Rodaje y edición" },
    ],
    whatWeDid: [
            "Rodaje en rocódromo con cámara en mano y planos de detalle",
      "Edición rítmica sincronizada con la música",
      "Etalonaje con look propio y entrega optimizada para Instagram",
    ],
    gallery: [{ src: "/media/jakob-loop.mp4", poster: "/media/jakob-poster.jpg", label: "Reel" }],
    cta: "¿Eres deportista o marca deportiva?",
  },
  {
    slug: "conciertos-europa-fm",
    eyebrow: "Conciertos · Europa FM · Onda Cero",
    title: "Europa FM",
    tagline: "El concierto, esa misma noche.",
    heroVideo: "/media/fangoria-hero.mp4",
    heroPoster: "/media/fangoria-poster.jpg",
    intro:
      "Cubrimos los conciertos de Europa FM en Castilla y León y eventos de Onda Cero. La clave es la velocidad: el reel sale publicado esa misma noche y el aftermovie llega a primera hora de la mañana siguiente, en horizontal y vertical.",
    facts: [
      { label: "Artistas", value: "Fangoria, Marlena, Bombai, Paula Koops" },
      { label: "Entrega", value: "Reel la misma noche · aftermovie a la mañana" },
      { label: "Formatos", value: "Horizontal, vertical, fotografía y entrevista" },
    ],
    whatWeDid: [
      "Cobertura completa: backstage, escenario y público",
      "Reel editado y entregado durante la misma noche",
      "Aftermovie en horizontal y vertical",
      "Fotografía editada del concierto",
      "Entrevistas a artistas",
      "Cobertura de eventos de Onda Cero, como el Premio Mujer Leonesa",
    ],
    gallery: [
      { src: "/media/fangoria-loop.mp4", poster: "/media/fangoria-poster.jpg", label: "Fangoria" },
      { src: "/media/marlena-loop.mp4", poster: "/media/marlena-poster.jpg", label: "Marlena" },
      { src: "/media/bombai-loop.mp4", poster: "/media/bombai-poster.jpg", label: "Bombai" },
      { src: "/media/paula-loop.mp4", poster: "/media/paula-poster.jpg", label: "Paula Koops" },
      { src: "/media/palencia-loop.mp4", poster: "/media/palencia-poster.jpg", label: "Palencia" },
    ],
    extra: {
      id: "leon-street-music",
      title: "León Street Music",
      text: "La música en la calle también se cuenta. Reels y vídeo final del festival callejero de León.",
      video: { src: "/media/lstreet-loop.mp4", poster: "/media/lstreet-poster.jpg", label: "León Street Music" },
    },
    cta: "¿Organizas conciertos o eventos?",
  },
  {
    slug: "bodegas",
    eyebrow: "Vino · Gastronomía · Ribera del Duero y León",
    title: "Bodegas",
    tagline: "Del viñedo a la copa.",
    heroVideo: "/media/fuentenebro-hero.mp4",
    heroPoster: "/media/fuentenebro-poster.jpg",
    intro:
      "Producimos el contenido de cuatro bodegas y un restaurante: San Cobate, Señorío de Nava, Fuentenebro, Vile la Finca y Marcela Brasa y Vinos. Cada marca tiene su propia voz y su propio estilo visual, aunque el contenido salga de las mismas jornadas de rodaje.",
    facts: [
      { label: "Marcas", value: "4 bodegas y 1 restaurante" },
      { label: "Volumen", value: "Unos 40 reels por jornada de rodaje" },
      { label: "Servicio", value: "Guion, rodaje, edición y fotografía" },
    ],
    whatWeDid: [
      "Escaleta y guiones por marca antes de cada rodaje",
      "Jornadas de rodaje en viñedo, bodega y sala",
      "Reels con las personas de cada bodega hablando a cámara",
      "Look de color propio para cada marca",
      "Fotografía de producto, viñedo y gastronomía",
    ],
    gallery: [
      { src: "/media/vile-loop.mp4", poster: "/media/vile-poster.jpg", label: "Vile la Finca" },
      { src: "/media/sancobate-loop.mp4", poster: "/media/sancobate-poster.jpg", label: "San Cobate" },
      { src: "/media/fuentenebro-loop.mp4", poster: "/media/fuentenebro-poster.jpg", label: "Fuentenebro" },
      { src: "/media/marcela-loop.mp4", poster: "/media/marcela-poster.jpg", label: "Marcela Brasa y Vinos" },
    ],
    cta: "¿Tienes una bodega o un restaurante?",
  },
  {
    slug: "verdiago-vive",
    eyebrow: "Turismo · Hotel rural y spa · León",
    title: "Verdiago Vive",
    tagline: "Un pueblo que vuelve a vivir.",
    heroVideo: "/media/verdiago-hero.mp4",
    heroPoster: "/media/verdiago-poster.jpg",
    intro:
      "Verdiago Vive es un hotel rural con casas, spa y restaurante en un pueblo de la montaña leonesa recuperado por una familia. Planificamos el trimestre completo, rodamos en una sola jornada y creamos un kit de marca para que cada pieza salga rápida y coherente.",
    facts: [
      { label: "Rodaje", value: "Una sesión por trimestre" },
      { label: "Redes", value: "Instagram, Facebook y TikTok" },
      { label: "Kit", value: "Look de color, logo animado y rótulos" },
    ],
    whatWeDid: [
      "Cuestionario de arranque y plan de contenido trimestral",
      "Guion técnico y guiones para quienes hablan a cámara",
      "Rodaje de habitaciones, casas, spa y restaurante",
      "Kit de marca para edición: LUT, logo animado y rótulos",
      "Gestión de redes con reels y fotografía semanal",
    ],
    gallery: [{ src: "/media/verdiago-loop.mp4", poster: "/media/verdiago-poster.jpg", label: "Reel" }],
    cta: "¿Tienes un hotel o alojamiento?",
  },
  {
    slug: "leon-solo-musica",
    eyebrow: "Música · Evento · León",
    title: "León Solo Música",
    tagline: "El evento, y lo que queda después.",
    heroVideo: "/media/lsm-hero.mp4",
    heroPoster: "/media/lsm-poster.jpg",
    intro:
      "Cobertura audiovisual de León Solo Música. Del mismo rodaje salieron un vídeo largo en horizontal y vertical y reels en dos versiones, con y sin patrocinadores, para que cada marca implicada pudiera usarlos.",
    facts: [
      { label: "Formatos", value: "Horizontal y vertical" },
      { label: "Versiones", value: "Con y sin patrocinadores" },
      { label: "Servicio", value: "Rodaje y edición" },
    ],
    whatWeDid: [
      "Rodaje completo del evento",
      "Vídeo largo en horizontal y vertical",
      "Reels con versión para patrocinadores",
    ],
    gallery: [{ src: "/media/lsm-loop.mp4", poster: "/media/lsm-poster.jpg", label: "Evento" }],
    cta: "¿Organizas un evento?",
  },
  {
    slug: "fele-leon-es-comercio",
    eyebrow: "Campaña · Institucional · León",
    title: "FELE",
    tagline: "León es Comercio.",
    heroVideo: "/media/fele-hero.mp4",
    heroPoster: "/media/fele-poster.jpg",
    intro:
      "Vídeos para la Federación Leonesa de Empresarios: la campaña «León es Comercio» y una pieza sobre el comercio local, con entrevistas y planos de los negocios de la ciudad.",
    facts: [
      { label: "Cliente", value: "Federación Leonesa de Empresarios" },
      { label: "Piezas", value: "Campaña y vídeo de comercios" },
      { label: "Formato", value: "4K horizontal" },
    ],
    whatWeDid: ["Rodaje de entrevistas y comercios", "Edición de las piezas de campaña", "Entrega en alta calidad para difusión"],
    gallery: [{ src: "/media/fele-loop.mp4", poster: "/media/fele-poster.jpg", label: "León es Comercio" }],
    cta: "¿Necesitas vídeo para una campaña?",
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
