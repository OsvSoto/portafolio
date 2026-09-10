import ProjectGallery from "@/components/ProjectGallery";
import ProjectDocuments from "@/components/ProjectDocuments";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { accents } from "@/lib/accents";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const accent = accents[project.accent];

  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/#proyectos"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            ← Volver a proyectos
          </Link>

          <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {project.title}
            </h1>
            <div className="flex shrink-0 flex-col items-start gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${accent.statusBadge}`}>
                {project.status}
              </span>
              {project.repository && <span className="text-xs text-zinc-500 dark:text-zinc-400">Repositorio {project.repository.toLowerCase()}</span>}
            </div>
          </div>

          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{project.summary}</p>

          {!!project.documents?.length && (
            <a href="#documentacion" className="mt-4 inline-block text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100">
              Documentación ({project.documents.length} PDF) <span aria-hidden="true">↓</span>
            </a>
          )}

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-700 dark:border-white/[.08] dark:text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <ProjectGallery project={project} detail />
            </div>
          )}

          <div className="mt-12 space-y-10">
            <div>
              <h2 className="mb-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Planteamiento del problema
              </h2>
              <p className="leading-7 text-zinc-700 dark:text-zinc-300">{project.problem}</p>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Solución
              </h2>
              <p className="leading-7 text-zinc-700 dark:text-zinc-300">{project.solution}</p>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Decisiones y fundamentos
              </h2>
              <ul className="list-disc space-y-2 pl-5 leading-7 text-zinc-700 dark:text-zinc-300">
                {project.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Qué hice yo
              </h2>
              <p className="leading-7 text-zinc-700 dark:text-zinc-300">{project.role}</p>
            </div>
          </div>

          <ProjectDocuments documents={project.documents} />

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Ver en GitHub
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
