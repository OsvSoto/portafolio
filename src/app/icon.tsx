import { ImageResponse } from "next/og";

// Reemplaza el favicon por defecto de create-next-app (el logo de Next.js).
// En una entrevista la pestaña queda con un monograma propio en vez del logo
// del framework.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
          borderRadius: 6,
        }}
      >
        OS
      </div>
    ),
    size,
  );
}
