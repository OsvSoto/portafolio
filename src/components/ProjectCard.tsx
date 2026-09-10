import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";
import { accents } from "@/lib/accents";

export default function ProjectCard({ project, featuredLayout = false, reverse = false }: { project: Project; featuredLayout?: boolean; reverse?: boolean }) {
  const accent = accents[project.accent];
  return (
    <article
      className={`project-card group h-full min-w-0 overflow-hidden rounded-3xl border border-black/10 bg-white dark:border-white/10 dark:bg-zinc-950 ${featuredLayout ? "grid md:grid-cols-2" : "flex flex-col"} ${accent.cardBorderHover}`}
    >
      {project.images?.length ? (
        <Link href={`/proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.title}`} className={`block overflow-hidden ${featuredLayout && reverse ? "md:order-2" : ""}`}>
          <ProjectCover project={project} />
        </Link>
      ) : (
        <Link href={`/proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.title}`} className={`relative flex items-center justify-center overflow-hidden p-6 ${accent.coverBg} ${project.featured ? "h-72" : "h-48"}`}>
          <div className="w-full max-w-xs">
            <p className={`mb-5 font-mono text-xs uppercase tracking-wider ${accent.category}`}>{project.category}</p>
            <ol className="space-y-2">
              {project.highlights.map((item, index) => (
                <li key={item} className={`flex items-center gap-3 rounded-lg border bg-white/70 px-4 py-2 text-sm dark:bg-zinc-950/50 ${accent.highlightBorder}`}>
                  <span className={`font-mono text-xs ${accent.highlightIndex}`}>0{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Link>
      )}
      <Link href={`/proyectos/${project.slug}`} className={`flex min-w-0 flex-1 flex-col justify-center gap-4 ${featuredLayout ? "p-7 lg:p-10" : "p-6"}`}>
        <p className={`font-mono text-xs ${accent.category}`}>{project.category}</p>
        <div>
          <h3 className={`font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 ${featuredLayout ? "text-3xl lg:text-4xl" : "text-xl"}`}>{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.summary}</p>
        </div>
        {featuredLayout && <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400"><span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">Mi aporte</span>{project.role}</p>}
        <div className={`flex flex-wrap gap-2 pt-2 ${featuredLayout ? "" : "mt-auto"}`}>
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {s}
            </span>
          ))}
        </div>
        <span className={`mt-3 flex items-center justify-between border-t border-zinc-200 pt-4 text-sm font-medium dark:border-zinc-800 ${accent.category}`}>
          Ver proyecto <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover:translate-x-1">↗</span>
        </span>
      </Link>
    </article>
  );
}
