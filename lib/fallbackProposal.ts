type SectorKey = "restaurante" | "bar" | "hotel" | "tienda" | "evento" | "otro";

type SectorTemplate = {
  problema: string;
  acciones: [string, string, string];
  resultado: string;
};

const templates: Record<SectorKey, SectorTemplate> = {
  restaurante: {
    problema:
      "llenar mesas entre semana, mantener el local visible en redes y convertir seguidores en reservas reales",
    acciones: [
      "Calendario de contenido gastronómico y reels de platos con publicación automática en Instagram",
      "Campañas Meta Ads geolocalizadas para captar reservas en un radio de 15 km",
      "Respuesta automática a consultas de reservas y menús por WhatsApp e Instagram en menos de 2 minutos",
    ],
    resultado:
      "+35% reservas online, 2.000 nuevos seguidores locales y un 20% más de ticket medio en fines de semana",
  },
  bar: {
    problema:
      "generar tráfico en tardes entre semana y convertir visitas ocasionales en clientes recurrentes",
    acciones: [
      "Estrategia de eventos y tardeos con contenido que no parece publicidad en Instagram y TikTok",
      "Segmentación de audiencia por edad e intereses para promocionar noches temáticas",
      "Automatización de respuestas a DMs sobre reservas, listas y horarios del local",
    ],
    resultado:
      "+40% asistencia en tardes entre semana y lista de espera activa de 800 personas en 90 días",
  },
  hotel: {
    problema:
      "ocupar habitaciones en temporada baja y competir con OTAs que se quedan con el margen y el contacto directo",
    acciones: [
      "Contenido visual de habitaciones y experiencias con campañas de retargeting a visitantes del web",
      "Google Ads y Meta Ads orientados a reservas directas sin comisión de intermediarios",
      "Secuencia automática de email para huéspedes que abandonan el proceso de reserva",
    ],
    resultado:
      "+25% reservas directas, reducción del 15% en dependencia de OTAs y ocupación media del 78% en temporada baja",
  },
  tienda: {
    problema:
      "atraer tráfico a tienda física y online sin depender solo de descuentos que erosionan el margen",
    acciones: [
      "Contenido de producto y UGC con influencers locales de bajo coste y alto engagement",
      "Campañas de tráfico y conversión en Meta Ads con catálogo dinámico",
      "Automatización de seguimiento a leads que preguntan por stock, precios y envíos",
    ],
    resultado:
      "+30% ventas online, +18% visitas a tienda física y carrito abandonado recuperado en un 12% de casos",
  },
  evento: {
    problema:
      "vender entradas a tiempo, coordinar comunicación multicanal y no perder ventas por fricción en la compra",
    acciones: [
      "Estrategia de lanzamiento por fases con contenido de artistas y countdown en redes",
      "Campañas Meta Ads segmentadas por provincia y retargeting a visitantes de la web de venta",
      "Automatización de confirmaciones, recordatorios y respuestas a dudas de asistentes",
    ],
    resultado:
      "85% del aforo vendido 3 semanas antes del evento, tasa de conversión web del 22% y cero colas en acceso",
  },
  otro: {
    problema:
      "captar leads con intención real, responder a tiempo y no perder oportunidades por procesos manuales lentos",
    acciones: [
      "Auditoría de embudo y automatización de primera respuesta personalizada con IA",
      "Calendario de contenido adaptado a tu sector con publicación y métricas en un solo panel",
      "Reportes mensuales automáticos con KPIs claros y recomendaciones de mejora",
    ],
    resultado:
      "+45% leads cualificados, respuesta media bajo 2 minutos y un 30% más de cierre en el primer contacto",
  },
};

function detectSector(tipo: string): SectorKey {
  const t = tipo.toLowerCase();
  if (/restaurante|restauración|gastro|comida|bar\b|café|cafe/.test(t)) {
    if (/bar|pub|cervecería|cerveceria/.test(t) && !/restaurante/.test(t)) return "bar";
    return "restaurante";
  }
  if (/bar|pub|cervecería|cerveceria|discoteca|club/.test(t)) return "bar";
  if (/hotel|hostal|alojamiento|apartamento turístico|apartamento turistico/.test(t)) return "hotel";
  if (/tienda|comercio|retail|ecommerce|e-commerce|moda|boutique/.test(t)) return "tienda";
  if (/evento|festival|concierto|fiesta|celebración|celebracion/.test(t)) return "evento";
  return "otro";
}

export function generateFallbackProposal(
  nombre: string,
  tipo: string,
  necesidad: string,
): string {
  const sector = detectSector(tipo);
  const tpl = templates[sector];
  const necesidadLine = necesidad.trim()
    ? ` Tu prioridad declarada: ${necesidad.trim()}.`
    : "";

  return `**Diagnóstico para ${nombre}:**
Como ${tipo}, probablemente tu mayor reto ahora mismo es ${tpl.problema}.${necesidadLine}

**Lo que haría MYRAL:**
→ ${tpl.acciones[0]}
→ ${tpl.acciones[1]}
→ ${tpl.acciones[2]}

**Resultado esperado en 3 meses:**
${tpl.resultado}

**Próximo paso:** Reservar una llamada de 20 minutos para analizar tu caso concreto.`;
}

export function buildProposalPrompt(nombre: string, tipo: string, necesidad: string): string {
  return `Eres un experto en marketing digital de MYRAL Agency. Genera una propuesta personalizada y profesional para este negocio:

Negocio: ${nombre}
Tipo: ${tipo}
Necesidad: ${necesidad}

La propuesta debe incluir:
1. Diagnóstico rápido (2-3 líneas sobre su situación actual típica)
2. Lo que haría MYRAL (3-4 acciones concretas y específicas para ese tipo de negocio)
3. Resultado esperado en 3 meses (con números concretos y realistas)
4. Próximo paso

Tono: directo, profesional, sin rodeos. Máximo 250 palabras. En español.`;
}
