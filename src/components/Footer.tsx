import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-shell flex flex-wrap items-center justify-between gap-4 py-8 text-xs text-zinc-500 dark:text-zinc-400">
      <p>© {new Date().getFullYear()} Osvaldo Soto.</p>
      <Link href="/#proyectos" className="text-link">Explorar proyectos ↑</Link>
    </footer>
  );
}
