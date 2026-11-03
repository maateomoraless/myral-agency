export type CaseMedia = { type: "video" | "image"; src: string; poster?: string; label?: string };

export type CaseFilm = { src: string; poster: string; title: string; vertical?: boolean };

export type CaseStudy = {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  heroVideo: string;
  heroPoster: string;
  intro: string;
  whatWeDid: string[];
  films?: CaseFilm[];
  gallery: CaseMedia[];
  galleryTitle?: string;
  link?: { href: string; label: string };
  cta: string;
  metaDescription: string;
};

const still = (slug: string, n: number): CaseMedia => ({ type: "image", src: `/work/${slug}/still-${n}.jpg` });
const stills = (slug: string) => [1, 2, 3, 4, 5, 6].map((n) => still(slug, n));
const loop = (slug: string, key: string, label?: string): CaseMedia => ({
  type: "video",
  src: `/work/${slug}/${key}-loop.mp4`,
  poster: `/work/${slug}/${key}-poster.jpg`,
  label,
});

export const cases: CaseStudy[] = [
  {
    slug: "europa-fm",
    badge: "Cobertura de Eventos · 2026",
    title: "Europa FM",
    subtitle: "El concierto, contado esa misma noche.",
    heroVideo: "/work/europa-fm/fangoria-hero.mp4",
    heroPoster: "/work/europa-fm/fangoria-hero-poster.jpg",
    intro:
      "Europa FM confía en MYRAL la cobertura audiovisual de sus conciertos en Castilla y León. Fangoria, Paula Koops, Marlena, Bombai y Palencia: cada concierto con el mismo estándar y el mismo compromiso de entrega.",
    whatWeDid: [
      "Grabación completa de cada concierto",
      "Reel vertical entregado la misma noche",
      "Aftermovie en horizontal y vertical a la mañana siguiente",
      "Selección y edición de fotografías del evento",
      "Desplazamiento del equipo a cada ciudad",
    ],
    galleryTitle: "Cinco conciertos.",
    gallery: [
      loop("europa-fm", "fangoria", "Fangoria"),
      loop("europa-fm", "paula", "Paula Koops"),
      loop("europa-fm", "marlena", "Marlena"),
      loop("europa-fm", "bombai", "Bombai"),
      loop("europa-fm", "palencia", "Palencia"),
    ],
    cta: "¿Tienes un evento que merece contarse así?",
    metaDescription:
      "Cobertura audiovisual de los conciertos de Europa FM en Castilla y León: reel la misma noche y aftermovie al día siguiente.",
  },
  {
    slug: "jakob-schubert",
    badge: "Contenido Deportivo",
    title: "Jakob Schubert",
    subtitle: "Escalada de élite, editada al ritmo que pide.",
    heroVideo: "/work/jakob-schubert/jakob-hero.mp4",
    heroPoster: "/work/jakob-schubert/jakob-hero-poster.jpg",
    intro:
      "Jakob Schubert es uno de los mejores escaladores del mundo. Para su contenido en redes buscábamos un montaje con ritmo, tensión y carácter, que se sostuviera al nivel de lo que hace en la pared.",
    whatWeDid: [
      "Montaje y edición del vídeo",
      "Color grading cinematográfico",
      "Diseño de títulos sincronizados con la música",
      "Slideshow de fotografía analógica con diseño sonoro",
      "Versiones adaptadas a redes sociales",
    ],
    gallery: [],
    link: { href: "https://www.instagram.com/jakob.schubert/", label: "Ver perfil →" },
    cta: "¿Quieres este nivel de producción para tu marca?",
    metaDescription: "Edición de vídeo para el escalador Jakob Schubert.",
  },
  {
    slug: "leon-solo-musica",
    badge: "Producción Audiovisual · 2026",
    title: "León Solo Música",
    subtitle: "Toda la energía del directo.",
    heroVideo: "/work/leon-solo-musica/lsm-hero.mp4",
    heroPoster: "/work/leon-solo-musica/lsm-poster.jpg",
    intro:
      "Grabamos los conciertos de León Solo Música y montamos un aftermovie corto para redes que resume lo que se vivió encima y debajo del escenario.",
    whatWeDid: [
      "Grabación de los conciertos",
      "Entrega de todo el material en bruto",
      "Edición de aftermovie para redes",
      "Color grading y adaptación de formatos",
    ],
    films: [
      { src: "/work/leon-solo-musica/lsm-aftermovie.mp4", poster: "/work/leon-solo-musica/lsm-aftermovie.jpg", title: "Aftermovie" },
    ],
    gallery: stills("leon-solo-musica"),
    cta: "¿Organizas un festival o un concierto?",
    metaDescription: "Grabación de conciertos y aftermovie para León Solo Música.",
  },
  {
    slug: "verdiago-vive",
    badge: "Social Media · 2026",
    title: "Verdiago Vive",
    subtitle: "La montaña de León, en tu feed.",
    heroVideo: "/work/verdiago-vive/verdiago-hero.mp4",
    heroPoster: "/work/verdiago-vive/verdiago-poster.jpg",
    intro:
      "Verdiago Vive reúne hotel rural, casas rurales, spa y restaurante en Verdiago, en la montaña de León. Llevamos su contenido y sus redes para que la experiencia se entienda antes de reservar.",
    whatWeDid: [
      "Cuestionario de marca y estrategia de arranque",
      "Grabación de instalaciones, entorno y gastronomía",
      "Edición de reels y fotografía",
      "Gestión mensual de redes sociales",
    ],
    gallery: [],
    cta: "¿Tienes un alojamiento que merece más reservas?",
    metaDescription: "Contenido y gestión de redes para Verdiago Vive, hotel rural, spa y restaurante en León.",
  },
  {
    slug: "bodegas",
    badge: "Producción de Contenido · 2026",
    title: "Bodegas",
    subtitle: "Del viñedo a la copa.",
    heroVideo: "/work/bodegas/bodegas-hero.mp4",
    heroPoster: "/work/bodegas/bodegas-hero-poster.jpg",
    intro:
      "Para las bodegas San Cobate, Señorío de Nava, Fuentenebro y Vile la Finca producimos el contenido de redes en jornadas de grabación en finca: viñedo, bodega, proceso y producto, junto a Ciento Volando.",
    whatWeDid: [
      "Jornadas de grabación en cada finca, también con dron",
      "Decenas de reels por jornada",
      "Fotografía de viñedo, bodega y producto",
      "Edición y adaptación para Instagram, TikTok y Facebook",
    ],
    films: [
      { src: "/work/bodegas/sancobate-reel.mp4", poster: "/work/bodegas/sancobate-reel.jpg", title: "Reel · San Cobate", vertical: true },
    ],
    galleryTitle: "En la finca.",
    gallery: [
      loop("bodegas", "sancobate", "San Cobate"),
      loop("bodegas", "senorio", "Señorío de Nava"),
      loop("bodegas", "fuentenebro", "Fuentenebro"),
    ],
    cta: "¿Quieres que tu bodega se vea así?",
    metaDescription: "Producción de contenido para las bodegas San Cobate, Señorío de Nava, Fuentenebro y Vile la Finca.",
  },
  {
    slug: "marcela-brasa-y-vinos",
    badge: "Social Media · 2026",
    title: "Marcela Brasa y Vinos",
    subtitle: "Brasa, vino y buena mesa.",
    heroVideo: "/work/marcela-brasa-y-vinos/marcela-hero.mp4",
    heroPoster: "/work/marcela-brasa-y-vinos/marcela-hero-poster.jpg",
    intro:
      "Contenido mensual para Marcela Brasa y Vinos: platos, brasa, sala y bodega, contados con el ritmo que funciona en redes.",
    whatWeDid: [
      "Grabación de platos, cocina y sala",
      "Unos diez reels al mes",
      "Fotografía gastronómica",
      "Edición y publicación en redes",
    ],
    gallery: [
      loop("marcela-brasa-y-vinos", "vino"),
      still("marcela-brasa-y-vinos", 1),
      loop("marcela-brasa-y-vinos", "tartar"),
      still("marcela-brasa-y-vinos", 3),
      loop("marcela-brasa-y-vinos", "cerveza"),
      still("marcela-brasa-y-vinos", 6),
      loop("marcela-brasa-y-vinos", "aceite"),
      still("marcela-brasa-y-vinos", 4),
      loop("marcela-brasa-y-vinos", "jamon"),
    ],
    cta: "¿Tu restaurante necesita este contenido?",
    metaDescription: "Contenido mensual para redes de Marcela Brasa y Vinos.",
  },
  {
    slug: "fele-leon-es-comercio",
    badge: "Producción Audiovisual · 2026",
    title: "FELE",
    subtitle: "León es Comercio.",
    heroVideo: "/work/fele-leon-es-comercio/fele-hero.mp4",
    heroPoster: "/work/fele-leon-es-comercio/fele-poster.jpg",
    intro:
      "Para la campaña \"León es Comercio\" de la Federación Leonesa de Empresarios grabamos y editamos piezas de vídeo que ponen cara y voz al comercio local.",
    whatWeDid: [
      "Grabación de entrevistas y recursos",
      "Edición de los vídeos de campaña",
      "Adaptación a formatos para redes",
    ],
    films: [
      { src: "/work/fele-leon-es-comercio/fele-video.mp4", poster: "/work/fele-leon-es-comercio/fele-video.jpg", title: "León es Comercio" },
    ],
    gallery: [],
    cta: "¿Tienes una campaña que contar?",
    metaDescription: "Vídeos de la campaña León es Comercio de la Federación Leonesa de Empresarios (FELE).",
  },
  {
    slug: "leon-street-music",
    badge: "Producción Audiovisual · 2026",
    title: "León Street Music",
    subtitle: "La música, en la calle.",
    heroVideo: "/work/leon-street-music/lstreet-hero.mp4",
    heroPoster: "/work/leon-street-music/lstreet-poster.jpg",
    intro:
      "Vídeo promocional para León Street Music grabado en las calles del centro de León, pensado para redes y en formato vertical.",
    whatWeDid: ["Grabación en exteriores", "Edición y color", "Formato vertical para redes"],
    films: [
      { src: "/work/leon-street-music/lstreet-reel.mp4", poster: "/work/leon-street-music/lstreet-reel.jpg", title: "Reel", vertical: true },
    ],
    gallery: [],
    cta: "¿Quieres un vídeo así para tu proyecto?",
    metaDescription: "Vídeo promocional para León Street Music.",
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
