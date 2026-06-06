import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MYRAL Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#05050b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: "#f0ede8",
            letterSpacing: "-4px",
            lineHeight: 1,
            display: "flex",
            alignItems: "baseline",
          }}
        >
          MYRAL<span style={{ color: "#F5E614" }}>.</span>
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(240,237,232,0.4)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Branding · IA · Marketing Digital
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#F5E614",
            letterSpacing: "0.1em",
            marginTop: 8,
          }}
        >
          myralagency.com
        </div>
      </div>
    ),
    { ...size },
  );
}
