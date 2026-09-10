import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="site-shell section-space scroll-mt-24">
      <Reveal className="mb-10 grid gap-5 sm:grid-cols-2 sm:items-end">
        <div><p className="eyebrow mb-3">01 / Trabajo seleccionado</p><h2 className="section-title">Proyectos destacados<span className="text-zinc-400">.</span></h2></div>
        <p className="max-w-md leading-7 text-zinc-600 dark:text-zinc-400 sm:justify-self-end">Del planteamiento del problema al diseño de la solución: proyectos que muestran cómo analizo, modelo y fundamento mis decisiones.</p>
      </Reveal>
      <div className="space-y-8">
        {projects.filter((project) => project.featured).map((project, index) => (
          <Reveal key={project.slug}><ProjectCard project={project} featuredLayout reverse={index % 2 === 1} /></Reveal>
        ))}
      </div>
      <Reveal className="mb-6 mt-16 flex items-center gap-4"><h3 className="text-lg font-semibold tracking-tight">Más proyectos e investigación</h3><span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" /></Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.filter((project) => !project.featured).map((project) => <Reveal key={project.slug} className="h-full"><ProjectCard project={project} /></Reveal>)}
      </div>
    </section>
  );
}
