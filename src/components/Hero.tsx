import { education, siteConfig } from "@/lib/site-config";

const fichas = [
  {
    label: "Foco",
    value: "Análisis de problemas · Abstracción y modelamiento · Diseño de soluciones",
  },
  {
    label: "Visión",
    value: "Aplicar fundamentos de la computación para construir soluciones y evaluar sus alcances y limitaciones",
  },
  {
    label: "Investigación",
    value: "Evaluación experimental de LLM para detectar vulnerabilidades en implementaciones NTT de criptografía postcuántica",
  },
  {
    label: "Docencia",
    value: "Ayudantías de Matemáticas Discretas y Cálculo en Varias Variables · Tutorías PAIEP — USACH",
  },
];

export default function Hero() {
  return (
    <section>
      <div className="site-shell hero-enter py-14 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-zinc-200 pb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <span>~/osvaldo-soto-almuna</span>
          <span>USACH · {education[0].period}</span>
        </div>

        <h1 className="mt-12 text-[clamp(2.5rem,6.2vw,5.875rem)] font-semibold leading-none tracking-[-0.05em] text-zinc-950 sm:mt-14 dark:text-zinc-50">
          {siteConfig.name}
        </h1>

        <p className="mt-7 max-w-3xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl">{siteConfig.headline}</p>
        <p className="mt-4 max-w-[45rem] text-lg leading-relaxed text-zinc-600 sm:text-[19px] dark:text-zinc-400">
          {siteConfig.tagline}
        </p>

        <dl className="mt-12 grid gap-px border border-zinc-200 bg-zinc-200 sm:mt-14 sm:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-800">
          {fichas.map((ficha) => (
            <div key={ficha.label} className="flex flex-col gap-2 bg-background px-6 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                {ficha.label}
              </dt>
              <dd className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-200">
                {ficha.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-zinc-200 pt-7 sm:mt-14 dark:border-zinc-800">
          <div className="flex flex-wrap gap-3">
            <a href="#proyectos" className="button-primary">
              Ver proyectos <span aria-hidden="true">↗</span>
            </a>
            <a href="#contacto" className="button-secondary">
              Contactar
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-link">
              GitHub ↗
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
              LinkedIn ↗
            </a>
            <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              CV ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
