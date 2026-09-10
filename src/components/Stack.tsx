import { stack } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const icons: Record<string, string> = {
  Lenguajes: "m8 5-6 7 6 7m8-14 6 7-6 7m-2-16-4 18",
  "Frontend / Mobile": "M3 3h18v14H3zM8 21h8m-4-4v4M3 7h18",
  "Backend / Datos": "M20 5c0 2-3.6 3-8 3S4 7 4 5s3.6-3 8-3 8 1 8 3ZM4 5v14c0 2 3.6 3 8 3s8-1 8-3V5M4 12c0 2 3.6 3 8 3s8-1 8-3",
  Herramientas: "M3 4h18v16H3zM7 8l4 4-4 4m6 0h4",
  "Actualmente aprendiendo": "m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z",
};

export default function Stack() {
  return (
    <section id="stack" className="site-shell section-space scroll-mt-24">
      <Reveal className="mb-10">
        <p className="eyebrow mb-3">03 / Tecnologías</p>
        <h2 className="section-title">Herramientas utilizadas</h2>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(stack).map(([category, items]) => (
          <Reveal key={category} className="h-full">
            <div className="tech-card h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d={icons[category] ?? icons.Lenguajes} /></svg>
                </span>
                <h3 className="text-sm font-semibold">{category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => <li key={item} className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs leading-5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{item}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
