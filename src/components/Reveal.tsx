"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motion.matches || !("IntersectionObserver" in window)) return;

    // Lo que nace bajo el pliegue arranca oculto para que no alcance a parpadear.
    if (element.getBoundingClientRect().top >= window.innerHeight) element.dataset.pending = "true";

    const show = () => {
      delete element.dataset.pending;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show();
        else element.dataset.pending = "true";
      },
      { threshold: 0, rootMargin: "-8% 0px -8% 0px" },
    );
    observer.observe(element);
    element.addEventListener("focusin", show);
    motion.addEventListener("change", show);
    return () => {
      observer.disconnect();
      delete element.dataset.pending;
      element.removeEventListener("focusin", show);
      motion.removeEventListener("change", show);
    };
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
