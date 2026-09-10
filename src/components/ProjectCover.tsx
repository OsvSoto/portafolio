import Image from "next/image";
import type { Project } from "@/data/projects";
import { accents } from "@/lib/accents";

type CoverProject = Pick<
  Project,
  "title" | "images" | "imageAspect" | "featured" | "accent" | "coverImages"
>;

/**
 * Ventana de navegador simulada: barra con tres puntos + captura.
 * Con `ajustarAltura` se estira a la altura que le dé el contenedor en vez de
 * usar proporción fija — necesario en la pila, donde la tarjeta no siempre
 * tiene alto suficiente para un 4/3 y el marco terminaba recortado.
 */
function Ventana({
  src,
  sizes,
  ajustarAltura = false,
}: {
  src: string;
  sizes: string;
  ajustarAltura?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl dark:border-white/15 dark:bg-zinc-900 ${
        ajustarAltura ? "flex h-full flex-col" : ""
      }`}
    >
      <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-zinc-200 px-2.5 sm:h-7 sm:px-3 dark:border-zinc-800">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="size-1.5 rounded-full bg-zinc-400" />
        ))}
      </div>
      <div className={ajustarAltura ? "relative flex-1" : "relative aspect-[4/3]"}>
        <Image src={src} alt="" fill className="object-cover object-top" sizes={sizes} />
      </div>
    </div>
  );
}

export default function ProjectCover({ project }: { project: CoverProject }) {
  const images = project.images ?? [];
  if (!images.length) return null;

  const heightClass = project.featured ? "min-h-[340px] h-full md:min-h-[460px]" : "h-56";
  const accent = accents[project.accent];

  if (project.imageAspect === "portrait") {
    const shown = images.slice(0, 3);
    return (
      <div className={`flex items-center justify-center gap-3 overflow-hidden px-5 py-10 ${heightClass} w-full ${accent.coverBg}`}>
        {shown.map((src, index) => (
          <div key={src} className={`relative aspect-[9/19.5] w-[30%] max-w-[150px] shrink-0 overflow-hidden rounded-xl border border-zinc-900/20 shadow-xl ${index === 1 ? "-translate-y-4" : "translate-y-4"}`}>
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
        ))}
      </div>
    );
  }

  // Variante apilada: la primera al frente, abajo a la izquierda, y hasta dos
  // vistas asomando en diagonal hacia arriba y a la derecha, para que la tarjeta
  // insinúe que el proyecto tiene más pantallas dentro.
  // Los desplazamientos van en porcentaje y suman 100 % con el ancho de cada
  // marco (88 % + 12 %), así la pila nunca se sale del recuadro ni se recorta.
  const pila = project.coverImages ?? [];
  if (pila.length > 1) {
    const [frente, ...detras] = pila;
    const capas = [
      { src: detras[1], clase: "bottom-[12%] left-[12%] opacity-55" },
      { src: detras[0], clase: "bottom-[6%] left-[6%] opacity-80" },
    ].filter((capa): capa is { src: string; clase: string } => Boolean(capa.src));

    return (
      <div className={`flex items-center justify-center p-4 sm:p-6 ${accent.coverBg} ${heightClass}`}>
        <div className="relative h-full w-full max-w-[520px]">
          {capas.map(({ src, clase }) => (
            <div key={src} aria-hidden="true" className={`absolute h-[88%] w-[88%] ${clase}`}>
              <Ventana src={src} sizes="(min-width: 768px) 460px, 90vw" ajustarAltura />
            </div>
          ))}
          <div className="absolute bottom-0 left-0 h-[88%] w-[88%]">
            <Ventana src={frente} sizes="(min-width: 768px) 460px, 90vw" ajustarAltura />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center p-5 sm:p-8 ${accent.coverBg} ${heightClass}`}>
      <div className="w-full">
        <Ventana src={images[0]} sizes="(min-width: 768px) 500px, 100vw" />
      </div>
    </div>
  );
}
