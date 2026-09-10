"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { accents } from "@/lib/accents";

type GalleryProject = Pick<Project, "title" | "slug" | "images" | "imageLabels" | "imageAspect" | "accent">;

export default function ProjectGallery({
  project,
  detail = false,
}: {
  project: GalleryProject;
  detail?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!expanded) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  const images = project.images ?? [];
  if (!images.length) return null;

  const accent = accents[project.accent];
  const multiple = images.length > 1;
  const label = project.imageLabels?.[active] ?? `Vista ${active + 1}`;
  const change = (step: number) => setActive((current) => (current + step + images.length) % images.length);

  const slides = images.map((src, index) => (
    <div
      key={src}
      aria-hidden={index !== active}
      className={`pointer-events-none absolute inset-5 transition-opacity duration-300 ease-out motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`}
    >
      <Image
        src={src}
        alt={index === active ? `${project.title}: ${label}` : ""}
        fill
        className="object-contain drop-shadow-lg"
        sizes={project.imageAspect === "portrait" ? (detail ? "280px" : "160px") : "(min-width: 768px) 680px, 100vw"}
      />
    </div>
  ));

  const imageClass = `relative block w-full cursor-zoom-in focus-visible:-outline-offset-4 ${detail ? "h-[420px] sm:h-[560px]" : "h-72 sm:h-80"}`;

  return (
    <section
      aria-label={`Galería de ${project.title}`}
      aria-roledescription="carrusel"
      className={`overflow-hidden ${accent.galleryBg}`}
      onKeyDown={(event) => {
        if (!multiple) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          change(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <button
        type="button"
        aria-label={`Ampliar ${project.title}: ${label}`}
        aria-haspopup="dialog"
        onClick={() => setExpanded(true)}
        className={imageClass}
      >
        {slides}
      </button>

      <div className={`border-t px-4 py-3 ${accent.galleryBorder}`}>
        <div className="flex items-center gap-3">
          <p className={`min-w-0 flex-1 text-sm ${accent.galleryLabel}`}>{label}</p>
          {multiple && (
            <div className="flex shrink-0 items-center gap-1">
              <button type="button" onClick={() => change(-1)} aria-label="Imagen anterior" className={`flex size-11 items-center justify-center rounded-full text-xl ${accent.galleryNavBtn}`}>←</button>
              <span className={`font-mono text-xs tabular-nums ${accent.galleryCounter}`}>{active + 1} / {images.length}</span>
              <button type="button" onClick={() => change(1)} aria-label="Imagen siguiente" className={`flex size-11 items-center justify-center rounded-full text-xl ${accent.galleryNavBtn}`}>→</button>
            </div>
          )}
        </div>
        {multiple && (
          <>
            <div className="flex gap-1" aria-label="Elegir imagen">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Ver ${project.imageLabels?.[index] ?? `imagen ${index + 1}`}`}
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                  className="flex min-h-11 min-w-0 flex-1 items-center rounded px-1"
                >
                  <span className={`h-1 w-full rounded-full transition-colors motion-reduce:transition-none ${index === active ? accent.dotActive : accent.dotInactive}`} />
                </button>
              ))}
            </div>
          </>
        )}
        <p className={`text-xs ${accent.caption}`}>Haz clic en la imagen para ampliarla.</p>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`Imagen ampliada de ${project.title}`}
        className="gallery-dialog fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 text-white"
        onCancel={(event) => {
          event.preventDefault();
          setExpanded(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setExpanded(false);
        }}
      >
          <div
            className="flex h-full flex-col items-center justify-center gap-4 px-4 pb-6 pt-16 sm:px-12"
            onClick={(event) => {
              if (event.target === event.currentTarget) setExpanded(false);
            }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-4 top-3 flex min-h-11 items-center gap-2 rounded-full bg-zinc-900 px-4 text-sm text-white hover:bg-zinc-700"
            >
              Cerrar <span aria-hidden="true" className="text-xl">×</span>
            </button>
            <Image
              src={images[active]}
              alt={`${project.title}: ${label}`}
              width={1600}
              height={1200}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto max-h-[calc(100dvh-11rem)] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="flex max-w-full items-center gap-3 rounded-full bg-zinc-900 px-3 py-1">
              {multiple && (
                <button type="button" onClick={() => change(-1)} aria-label="Imagen anterior" className="flex size-11 shrink-0 items-center justify-center rounded-full text-xl hover:bg-white/15">←</button>
              )}
              <p className="min-w-0 text-center text-sm" aria-live="polite">
                {label}{multiple && <span className="ml-2 whitespace-nowrap text-zinc-400">{active + 1} / {images.length}</span>}
              </p>
              {multiple && (
                <button type="button" onClick={() => change(1)} aria-label="Imagen siguiente" className="flex size-11 shrink-0 items-center justify-center rounded-full text-xl hover:bg-white/15">→</button>
              )}
            </div>
          </div>
      </dialog>
    </section>
  );
}
