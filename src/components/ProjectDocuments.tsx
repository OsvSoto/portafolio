import type { ProjectDocument } from "@/data/projects";

function DocumentList({ documents }: { documents: ProjectDocument[] }) {
  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {documents.map((document) => (
        <li key={document.href}>
          <a href={document.href} download className="group flex flex-col gap-3 rounded-lg px-3 py-5 transition-colors hover:bg-zinc-50 sm:flex-row sm:items-center sm:justify-between sm:gap-6 dark:hover:bg-zinc-900">
            <div className="min-w-0">
              <p className="text-sm font-medium underline-offset-4 group-hover:underline">{document.title}</p>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{document.description}</p>
              <p className="mt-2 font-mono text-[10px] text-zinc-500 dark:text-zinc-400">{document.category} · PDF · {document.size}</p>
            </div>
            <span className="shrink-0 text-xs font-medium">Descargar <span aria-hidden="true">↓</span></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDocuments({ documents }: { documents?: ProjectDocument[] }) {
  if (!documents?.length) return null;
  const featured = documents.filter((document) => document.featured);
  const previous = documents.filter((document) => !document.featured);

  return (
    <section id="documentacion" aria-labelledby="documentation-title" className="mt-12 scroll-mt-24 border-t border-zinc-200 pt-10 dark:border-zinc-800">
      <h2 id="documentation-title" className="text-xl font-semibold tracking-tight">Documentación</h2>
      <p className="mb-4 mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">Informes y presentaciones del proyecto académico para profundizar en el análisis, el diseño y las entregas del equipo.</p>
      {featured.length > 0 && (
        <>
          <h3 className="eyebrow mt-6">Última entrega disponible</h3>
          <DocumentList documents={featured} />
        </>
      )}
      {previous.length > 0 && (featured.length > 0 ? (
        <details className="mt-3 rounded-xl border border-zinc-200 px-4 dark:border-zinc-800">
          <summary className="cursor-pointer py-4 text-sm font-medium">Entregas anteriores ({previous.length})</summary>
          <DocumentList documents={previous} />
        </details>
      ) : <DocumentList documents={previous} />)}
    </section>
  );
}
