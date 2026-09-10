"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { id: "enfoque", label: "Enfoque" },
  { id: "proyectos", label: "Proyectos" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "stack", label: "Tecnologías" },
  { id: "contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links.map((link) => document.getElementById(link.id)).filter((section) => section !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = Math.max(100, window.innerHeight * 0.3);
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      }
      if (sections.length && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  const currentSection = pathname.startsWith("/proyectos/") ? "proyectos" : pathname === "/" ? active : "";

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-white/90 backdrop-blur-xl dark:border-white/[.08] dark:bg-zinc-950/90">
      <nav aria-label="Navegación principal" className="site-shell flex flex-wrap items-center justify-between gap-x-4 py-3" onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}>
        <Link href="/" onClick={() => setOpen(false)} className="py-3 font-mono text-sm font-semibold tracking-tight">
          osvaldo.soto<span aria-hidden="true" className="ml-1 text-zinc-400">/</span>
        </Link>
        <div className="flex items-center gap-2 lg:order-last">
          <ThemeToggle />
          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls="navigation-links"
            onClick={() => setOpen(!open)}
            className="min-h-11 rounded-lg border border-black/10 px-4 text-sm lg:hidden dark:border-white/15"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
        <ul id="navigation-links" className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 pb-3 text-sm lg:flex lg:w-auto lg:flex-row lg:gap-1 lg:pb-0`}>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={`/#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={currentSection === link.id ? "location" : undefined}
                className={`block rounded-full px-4 py-3 transition-colors ${
                  currentSection === link.id
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
