export const siteConfig = {
  name: "Osvaldo Soto Almuna",
  role: "Estudiante de último semestre · Licenciatura en Ciencia de la Computación | Analista en Computación Científica — USACH",
  headline: "Analizar, modelar y fundamentar soluciones.",
  tagline:
    "Mi formación en Ciencia de la Computación conecta fundamentos teóricos, algoritmos y matemáticas aplicadas. Desde esa base, planteo problemas, construyo modelos y diseño soluciones que llevo a la práctica mediante software e investigación.",
  email: "osvaldo.so.al@gmail.com",
  github: "https://github.com/OsvSoto",
  linkedin: "https://www.linkedin.com/in/osvaldo-soto-almuna/",
  cvUrl: "/cv-osvaldo-soto.pdf",
};

type BackgroundEntry = {
  institution: string;
  title: string;
  period: string;
  details?: string[];
};

export const education: BackgroundEntry[] = [
  {
    institution: "Universidad de Santiago de Chile",
    title: "Licenciatura en Ciencia de la Computación | Analista en Computación Científica",
    period: "2019–2026",
  },
];

export const experience: BackgroundEntry[] = [
  {
    institution: "PAIEP — Programa de Acceso Inclusivo, Equidad y Permanencia, USACH",
    title: "Tutor de Matemáticas y Álgebra",
    period: "Mayo 2026 – Actualidad",
    details: [
      "Acompañamiento académico individual a 5 estudiantes, con diagnóstico, planificación de sesiones y seguimiento de su avance.",
    ],
  },
  {
    institution: "Departamento de Matemáticas y Ciencia de la Computación, USACH",
    title: "Ayudante de cátedra",
    period: "Marzo 2025 – Actualidad",
    details: [
      "Matemáticas Discretas: marzo 2026 – actualidad.",
      "Cálculo en Varias Variables: marzo 2025 – enero 2026.",
      "Clases auxiliares, resolución de ejercicios y apoyo académico a estudiantes de primeros años.",
      "Revisión y corrección de controles y evaluaciones según los criterios del equipo docente.",
    ],
  },
];

export const certifications = [
  "Ciberseguridad para Redes de Datos — USACH",
];

export const stack = {
  Lenguajes: ["Python", "C", "C++", "TypeScript", "SQL", "PHP", "R"],
  "Frontend / Mobile": ["React Native", "Expo", "Next.js", "HTML", "CSS"],
  "Backend / Datos": ["PostgreSQL", "Supabase", "MySQL", "SQL Server"],
  Herramientas: ["Git", "GitFlow", "Linux", "Bash", "Docker"],
  "Actualmente aprendiendo": ["Cloud", "Ciberseguridad", "ITGC", "Power BI"],
};
