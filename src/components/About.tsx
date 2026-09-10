import { certifications, education, experience } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function About() {
  const journey = [
    ...experience.map((item) => ({ ...item, kind: "Experiencia" })),
    ...education.map((item) => ({ ...item, kind: "Formación" })),
  ];

  return (
    <section id="sobre-mi" className="scroll-mt-24 border-y border-zinc-200 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-900/25">
      <div className="site-shell section-space grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-3">02 / Sobre mí</p>
          <h2 className="section-title">Fundamentos científicos.<br /><span className="text-zinc-500">Problemas reales.</span></h2>
          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
            Soy estudiante de último semestre de Licenciatura en Ciencia de la Computación,
            conducente al título de Analista en Computación Científica en la Universidad de Santiago de Chile.
            Mi formación pone el foco en los fundamentos teóricos, los algoritmos y las matemáticas aplicadas:
            herramientas para abstraer un problema, formular modelos y razonar sobre una solución.
          </p>
          <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
            Me interesa comprender qué se busca resolver, qué supuestos se están haciendo y cómo evaluar
            las decisiones. Aplico esa mirada al análisis y diseño de software, al modelamiento de datos
            y a mi investigación en seguridad y criptografía postcuántica.
          </p>
          <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
            La docencia también forma parte de ese recorrido: en ayudantías y tutorías acompaño a otros
            estudiantes a comprender conceptos, desarrollar razonamientos y resolver problemas.
          </p>
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="eyebrow mb-3">Certificaciones</h3>
            <ul className="space-y-3">{certifications.map((certification) => <li key={certification} className="flex gap-3 text-sm leading-6"><span aria-hidden="true" className="text-zinc-500">↗</span>{certification}</li>)}</ul>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7 lg:pt-9">
          <h3 className="mb-8 text-lg font-semibold tracking-tight">Mi recorrido</h3>
          <ol className="ml-2 border-l border-zinc-300 dark:border-zinc-700">
            {journey.map((item) => (
              <li key={item.kind + item.institution} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
                <span aria-hidden="true" className="absolute -left-[5px] top-1.5 size-[9px] rounded-full bg-zinc-900 ring-4 ring-zinc-50 dark:bg-zinc-200 dark:ring-zinc-950" />
                <p className="eyebrow">{item.kind} / {item.period.trim()}</p>
                <h4 className="mt-3 text-xl font-medium leading-7 tracking-tight">{item.title.trim()}</h4>
                <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.institution.trim()}</p>
                {item.details && (
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6 text-zinc-600 marker:text-zinc-400 dark:text-zinc-400">
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
