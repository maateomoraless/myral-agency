const intros: Record<string, string> = {
  "Restaurante / Bar":
    "Para un restaurante como el tuyo, la presencia digital es hoy el principal canal de captación de nuevos clientes.",
  "Hotel / Alojamiento":
    "En el sector hotelero, el 80% de las reservas se deciden después de ver el perfil de Instagram o las reseñas online.",
  "Tienda / E-commerce":
    "Para una tienda, combinar redes sociales con publicidad segmentada es la fórmula que más rápido genera ventas.",
  "Deporte / Fitness":
    "En el sector deportivo, el contenido auténtico y los testimonios reales son los que más convierten.",
  "Eventos / Entretenimiento":
    "Para eventos, la clave está en generar expectación antes, cobertura durante y contenido viral después.",
  "Servicios profesionales":
    "Para servicios profesionales, la autoridad y la confianza se construyen con contenido de valor constante.",
};

const serviciosTexto: Record<string, string> = {
  "Redes Sociales":
    "gestionaríamos tus redes con una estrategia de contenido mensual, publicación diaria y análisis de métricas semanales",
  "Publicidad Digital":
    "lanzaríamos campañas de Meta Ads segmentadas exactamente para tu público objetivo con optimización continua",
  "Contenido / Vídeo":
    "produciríamos contenido audiovisual de nivel profesional — fotos, vídeos y reels que paran el scroll",
  "Branding / Identidad":
    "desarrollaríamos tu identidad visual completa: logo, colores, tipografía y manual de marca",
  "Web / App":
    "construiríamos una web rápida, bonita y optimizada para SEO con IA integrada desde el primer día",
  "Gestión de Eventos":
    "gestionaríamos tu evento de principio a fin: comunicación, venta de entradas, logística y cobertura",
  "Influencer Marketing":
    "identificaríamos los influencers correctos para tu marca y gestionaríamos la colaboración completa",
  "Automatización IA":
    "automatizaríamos la captación de leads, las propuestas y los reportes para que tu negocio trabaje solo",
};

const situaciones: Record<string, string> = {
  "No tengo presencia online": "Empezamos desde cero con una estrategia clara y resultados visibles en 30 días.",
  "Tengo presencia básica pero no funciona":
    "Auditamos lo que tienes, identificamos los problemas y lo rehacemos bien.",
  "Quiero mejorar lo que ya tengo":
    "Optimizamos lo que funciona y potenciamos los puntos débiles con datos reales.",
  "Estoy lanzando un negocio nuevo":
    "Te ayudamos a lanzar con una presencia profesional desde el primer día.",
};

export function generarDiagnostico(
  negocio: string,
  servicios: string[],
  situacion: string,
): string {
  const intro = intros[negocio] || "Tu negocio tiene potencial de crecimiento digital claro.";
  const serviciosSeleccionados = servicios
    .slice(0, 3)
    .map((s) => serviciosTexto[s])
    .filter(Boolean);
  const situacionTexto = situaciones[situacion] || "";

  const extraServicios =
    servicios.length > 3
      ? `\n→ Y ${servicios.length - 3} acción${servicios.length - 3 > 1 ? "es" : ""} más según tus prioridades`
      : "";

  return `**Diagnóstico para tu ${negocio}:**

${intro}

**Lo que haría MYRAL en tu caso:**
${serviciosSeleccionados.map((s) => `→ ${s.charAt(0).toUpperCase() + s.slice(1)}`).join("\n")}${extraServicios}

**Tu situación:** ${situacionTexto}

**Resultado esperado en 90 días:**
Con este plan, un negocio como el tuyo puede esperar un incremento del 40-60% en visibilidad online, reducción del tiempo dedicado a marketing en un 70% y primeros resultados medibles en las primeras 3 semanas.

**Próximo paso:** Una llamada de 20 minutos sin compromiso para analizar tu caso en detalle y darte un plan de acción concreto.`;
}
