export type AccentKey = "violet" | "lime" | "slate" | "indigo";

type AccentClasses = {
  category: string;
  cardBorderHover: string;
  coverBg: string;
  highlightBorder: string;
  highlightIndex: string;
  galleryBg: string;
  galleryBorder: string;
  galleryLabel: string;
  galleryNavBtn: string;
  galleryCounter: string;
  dotActive: string;
  dotInactive: string;
  caption: string;
  statusBadge: string;
};

/** Un acento por proyecto, derivado del look real de cada app/sitio (no del branding del portafolio). */
export const accents: Record<AccentKey, AccentClasses> = {
  // Plann-It: fondo morado oscuro con acentos rosa/lavanda.
  violet: {
    category: "text-violet-700 dark:text-violet-300",
    cardBorderHover: "hover:border-violet-400 dark:hover:border-violet-500",
    coverBg: "bg-violet-50 dark:bg-violet-950/30",
    highlightBorder: "border-violet-200/80 dark:border-violet-950",
    highlightIndex: "text-violet-700 dark:text-violet-300",
    galleryBg: "bg-violet-50 dark:bg-violet-950/30",
    galleryBorder: "border-violet-200/60 dark:border-violet-900/50",
    galleryLabel: "text-violet-950 dark:text-violet-200",
    galleryNavBtn: "text-violet-900 hover:bg-violet-100 dark:text-violet-200 dark:hover:bg-violet-900/60",
    galleryCounter: "text-violet-900 dark:text-violet-200",
    dotActive: "bg-violet-700 dark:bg-violet-300",
    dotInactive: "bg-violet-200 dark:bg-violet-900",
    caption: "text-violet-900/80 dark:text-violet-200/80",
    statusBadge: "bg-violet-50 text-violet-900 dark:bg-violet-950 dark:text-violet-300",
  },
  // Fundación Llaftun: verdes de bosque/musgo, papel y tierra.
  lime: {
    category: "text-lime-800 dark:text-lime-300",
    cardBorderHover: "hover:border-lime-500 dark:hover:border-lime-600",
    coverBg: "bg-lime-50 dark:bg-lime-950/30",
    highlightBorder: "border-lime-200/80 dark:border-lime-950",
    highlightIndex: "text-lime-800 dark:text-lime-300",
    galleryBg: "bg-lime-50 dark:bg-lime-950/30",
    galleryBorder: "border-lime-200/60 dark:border-lime-900/50",
    galleryLabel: "text-lime-950 dark:text-lime-200",
    galleryNavBtn: "text-lime-900 hover:bg-lime-100 dark:text-lime-200 dark:hover:bg-lime-900/60",
    galleryCounter: "text-lime-900 dark:text-lime-200",
    dotActive: "bg-lime-700 dark:bg-lime-300",
    dotInactive: "bg-lime-200 dark:bg-lime-900",
    caption: "text-lime-900/80 dark:text-lime-200/80",
    statusBadge: "bg-lime-50 text-lime-900 dark:bg-lime-950 dark:text-lime-300",
  },
  // Tesis NTT/PQC: investigación académica, sin UI propia — tono técnico.
  indigo: {
    category: "text-indigo-700 dark:text-indigo-300",
    cardBorderHover: "hover:border-indigo-400 dark:hover:border-indigo-500",
    coverBg: "bg-indigo-50 dark:bg-indigo-950/30",
    highlightBorder: "border-indigo-200/80 dark:border-indigo-950",
    highlightIndex: "text-indigo-700 dark:text-indigo-300",
    galleryBg: "bg-indigo-50 dark:bg-indigo-950/30",
    galleryBorder: "border-indigo-200/60 dark:border-indigo-900/50",
    galleryLabel: "text-indigo-950 dark:text-indigo-200",
    galleryNavBtn: "text-indigo-900 hover:bg-indigo-100 dark:text-indigo-200 dark:hover:bg-indigo-900/60",
    galleryCounter: "text-indigo-900 dark:text-indigo-200",
    dotActive: "bg-indigo-700 dark:bg-indigo-300",
    dotInactive: "bg-indigo-200 dark:bg-indigo-900",
    caption: "text-indigo-900/80 dark:text-indigo-200/80",
    statusBadge: "bg-indigo-50 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300",
  },
  // Scrimsync: interfaz monocroma blanco/negro de trazo grueso.
  slate: {
    category: "text-slate-700 dark:text-slate-300",
    cardBorderHover: "hover:border-slate-400 dark:hover:border-slate-500",
    coverBg: "bg-slate-50 dark:bg-slate-950/30",
    highlightBorder: "border-slate-200/80 dark:border-slate-800",
    highlightIndex: "text-slate-700 dark:text-slate-300",
    galleryBg: "bg-slate-50 dark:bg-slate-950/30",
    galleryBorder: "border-slate-200/60 dark:border-slate-800/50",
    galleryLabel: "text-slate-950 dark:text-slate-200",
    galleryNavBtn: "text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60",
    galleryCounter: "text-slate-900 dark:text-slate-200",
    dotActive: "bg-slate-700 dark:bg-slate-300",
    dotInactive: "bg-slate-200 dark:bg-slate-800",
    caption: "text-slate-900/80 dark:text-slate-200/80",
    statusBadge: "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-300",
  },
};
