import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "La API de Claude no está configurada. Contacta con MYRAL." },
      { status: 503 },
    );
  }

  let body: { nombre?: string; tipo?: string; necesidad?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const nombre = body.nombre?.trim();
  const tipo = body.tipo?.trim();
  const necesidad = body.necesidad?.trim();

  if (!nombre || !tipo || !necesidad) {
    return NextResponse.json({ error: "Completa todos los campos." }, { status: 400 });
  }

  const prompt = `Eres un experto en marketing digital de MYRAL Agency. Genera una propuesta personalizada y profesional para este negocio:

Negocio: ${nombre}
Tipo: ${tipo}
Necesidad: ${necesidad}

La propuesta debe incluir:
1. Diagnóstico rápido (2-3 líneas sobre su situación actual típica)
2. Lo que haría MYRAL (3-4 acciones concretas y específicas para ese tipo de negocio)
3. Resultado esperado en 3 meses (con números concretos y realistas)
4. Próximo paso

Tono: directo, profesional, sin rodeos. Máximo 250 palabras. En español.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return NextResponse.json(
        { error: "No se pudo generar la propuesta. Inténtalo de nuevo." },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      content?: { type: string; text?: string }[];
    };
    const text = data.content?.find((c) => c.type === "text")?.text?.trim();

    if (!text) {
      return NextResponse.json({ error: "Respuesta vacía de Claude." }, { status: 502 });
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("generate-proposal:", error);
    return NextResponse.json(
      { error: "Error de conexión. Inténtalo de nuevo." },
      { status: 500 },
    );
  }
}
