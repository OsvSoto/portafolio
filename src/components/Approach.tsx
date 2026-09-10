import Link from "next/link";
import Reveal from "@/components/Reveal";

const approach = [
  {
    title: "Analizar y plantear",
    description: "Entender el contexto, identificar necesidades y restricciones, y formular el problema antes de elegir una solución.",
    evidence: "ScrimSync: requisitos, análisis y diseño dentro de un ciclo completo de desarrollo.",
    href: "/proyectos/scrimsync",
  },
  {
    title: "Abstraer y modelar",
    description: "Representar entidades, relaciones y comportamiento para transformar un problema en un modelo que permita razonar sobre él.",
    evidence: "Plann-It: análisis y diseño con OMT++, modelamiento de datos y políticas de acceso.",
    href: "/proyectos/plann-it",
  },
  {
    title: "Evaluar y fundamentar",
    description: "Contrastar las decisiones con criterios explícitos, analizar sus limitaciones y usar la implementación como parte de la evaluación.",
    evidence: "Tesis en curso: diseño de una metodología experimental para comparar LLM en auditoría de código.",
    href: "/proyectos/tesis-ntt-pqc",
  },
];

export default function Approach() {
  return (
    <section id="enfoque" className="site-shell scroll-mt-24 pb-8 pt-4">
      <Reveal className="mb-8 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <p className="eyebrow mb-3">Mi enfoque / Ciencia de la Computación</p>
        <h2 className="section-title max-w-3xl">Del problema al modelo.<br /><span className="text-zinc-500">Del modelo a la solución.</span></h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">Mi aporte combina razonamiento, modelamiento y experimentación. Estos proyectos muestran cómo llevo esa formación a la práctica.</p>
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-3">
        {approach.map((item, index) => (
          <Reveal key={item.title} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-zinc-200 p-6 sm:p-7 dark:border-zinc-800">
              <span aria-hidden="true" className="mb-6 font-mono text-xs text-zinc-500">0{index + 1}</span>
              <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
              <p className="mb-6 mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
              <Link href={item.href} className="group mt-auto border-t border-zinc-200 pt-4 text-sm leading-6 text-zinc-600 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider">En la práctica ↗</span>
                <span className="underline-offset-4 group-hover:underline">{item.evidence}</span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
