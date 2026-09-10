import { ImageResponse } from "next/og";
import { education, siteConfig } from "@/lib/site-config";

// Imagen que se ve al pegar el enlace en WhatsApp, LinkedIn, Slack o un correo.
// Next la genera en el build a partir de este archivo: no hay que mantener un
// PNG aparte ni recordar actualizarlo si cambia el nombre o la carrera.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — Portafolio`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          <span>~/osvaldo-soto-almuna</span>
          <span>USACH · {education[0].period}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#fafafa",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#d4d4d8",
              maxWidth: 900,
            }}
          >
            Aplicaciones web y móviles · Modelamiento de bases de datos ·
            Investigación en criptografía postcuántica
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid #27272a",
            paddingTop: 28,
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          <span>Licenciatura en Ciencia de la Computación</span>
          <span style={{ color: "#52525b" }}>/</span>
          <span>Analista en Computación Científica</span>
        </div>
      </div>
    ),
    size,
  );
}
