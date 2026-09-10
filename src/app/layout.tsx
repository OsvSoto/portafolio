import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * URL pública del sitio. En Vercel se resuelve sola a partir del dominio de
 * producción; en local cae a localhost. Si más adelante hay dominio propio,
 * basta con definir NEXT_PUBLIC_SITE_URL y no tocar nada más.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const titulo = "Osvaldo Soto Almuna — Portafolio";
const descripcion =
  "Estudiante de último semestre de Ciencia de la Computación en la USACH. Aplicaciones web y móviles, modelamiento de bases de datos e investigación en criptografía postcuántica.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: titulo,
  description: descripcion,
  // Sin esto, al pegar el enlace en WhatsApp, LinkedIn o un correo sale un
  // texto pelado en vez de una tarjeta con imagen.
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: titulo,
    title: titulo,
    description: descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
  },
  alternates: { canonical: siteUrl },
};

// Corre antes del primer pintado para que el tema guardado no llegue con parpadeo.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
