import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="site-shell scroll-mt-24 pb-8 pt-4 sm:pb-12">
      <Reveal>
        {/* La caja seguía el tema oscuro también en modo claro: un bloque negro
            que deslumbra con poca luz ambiente. Ahora usa las mismas superficies
            que el resto del sitio (zinc-100 claro / zinc-900 oscuro) y sigue
            leyéndose como panel destacado por el borde y el contraste con el
            fondo de la página. */}
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 px-6 py-12 text-zinc-950 sm:px-12 sm:py-16 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-50">
          <p className="eyebrow mb-5">04</p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-6xl">Contacto</h2>
          {/* `.button-primary` ya invierte el relleno según el tema: píldora
              oscura sobre fondo claro y al revés. */}
          <a href={`mailto:${siteConfig.email}`} className="button-primary mt-8 max-w-full">
            <span className="min-w-0 break-all">{siteConfig.email}</span><span aria-hidden="true" className="shrink-0">↗</span>
          </a>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-300 pt-6 text-sm text-zinc-600 dark:border-white/15 dark:text-zinc-300">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn ↗</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub ↗</a>
            <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" className="text-link">Descargar CV ↗</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
