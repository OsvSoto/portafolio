import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="site-shell scroll-mt-24 pb-8 pt-4 sm:pb-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-12 text-zinc-50 sm:px-12 sm:py-16 dark:border dark:border-zinc-800 dark:bg-zinc-900/70">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">04</p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-6xl">Contacto</h2>
          <a href={`mailto:${siteConfig.email}`} className="mt-8 inline-flex max-w-full items-center gap-4 rounded-full bg-zinc-50 px-5 py-3.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200">
            <span className="min-w-0 break-all">{siteConfig.email}</span><span aria-hidden="true" className="shrink-0">↗</span>
          </a>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-zinc-300">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn ↗</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub ↗</a>
            <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" className="text-link">Descargar CV ↗</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
