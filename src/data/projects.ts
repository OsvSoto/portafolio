import type { AccentKey } from "@/lib/accents";

export type ProjectDocument = {
  title: string;
  description: string;
  href: string;
  category: "Informe" | "Presentación";
  size: string;
  featured?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  /** Color derivado del look real del proyecto (no del branding del portafolio). */
  accent: AccentKey;
  summary: string;
  problem: string;
  solution: string;
  decisions: string[];
  stack: string[];
  role: string;
  status: "v1.0 en desarrollo" | "Investigación en curso" | "Cliente real";
  repository?: "Privado" | "Público";
  featured?: boolean;
  category: string;
  highlights: string[];
  imageLabels?: string[];
  githubUrl?: string;
  documents?: ProjectDocument[];
  /** Rutas dentro de /public, p.ej. "/images/proyectos/plann-it/01-inicio.png" */
  images?: string[];
  /** "portrait" para capturas de teléfono, "landscape" para sitios/escritorio (default) */
  imageAspect?: "portrait" | "landscape";
  /**
   * Capturas para la tarjeta de la portada, la primera al frente y el resto
   * apiladas detrás. Sirve para que la tarjeta insinúe que hay más vistas
   * dentro sin depender del orden de la galería. Con una sola imagen (o sin
   * este campo) la tarjeta usa el marco simple de siempre.
   */
  coverImages?: string[];
};

export const projects: Project[] = [
  {
    slug: "plann-it",
    title: "Plann-It",
    accent: "violet",
    featured: true,
    category: "Aplicación móvil",
    highlights: ["Equipos", "Tareas", "Planificación"],
    summary: "Aplicación móvil para la gestión colaborativa de equipos y proyectos.",
    problem:
      "Los equipos que trabajan en proyectos coordinaban tareas, reuniones y avances por chats dispersos y aplicaciones o servicios diferentes, sin un lugar único para planificar ni dar seguimiento.",
    solution:
      "Aplicación móvil para organizar proyectos mediante tareas, equipos, chat y planificación, con backend en Supabase (autenticación, PostgreSQL, Row Level Security, Storage y Realtime) e integración de un LLM como asistente dentro del flujo de planificación.",
    decisions: [
      "Row Level Security en PostgreSQL para aislar datos por equipo/proyecto a nivel de base de datos, no solo en la capa de aplicación.",
      "Supabase Realtime para sincronizar tareas y chat entre miembros sin infraestructura propia de websockets.",
      "Flujo de trabajo en Git con GitFlow y metodología Scrum para coordinar el desarrollo en equipo.",
    ],
    stack: ["React Native", "TypeScript", "Expo", "Supabase", "PostgreSQL", "Git/GitFlow", "Scrum"],
    role: "Desarrollo frontend (React Native/TypeScript) y diseño del backend en Supabase, incluyendo modelo de datos y políticas RLS.",
    status: "v1.0 en desarrollo",
    repository: "Privado",
    documents: [
      {
        title: "Informe 5 — Implementación final",
        description: "Documento integrado con la planificación, los requisitos, el análisis, el diseño y la implementación de Plann-It.",
        href: "/documentos/plann-it/informe-5.pdf",
        category: "Informe",
        size: "7,4 MB",
        featured: true,
      },
      {
        title: "Presentación 5 — Implementación",
        description: "Síntesis del proyecto, recorrido por las etapas de OMT++ y programación orientada a objetos.",
        href: "/documentos/plann-it/presentacion-5.pdf",
        category: "Presentación",
        size: "941 kB",
        featured: true,
      },
      {
        title: "Informe 1 — Presentación y planificación",
        description: "Problemática, objetivos, alcance de la solución, metodología y plan de trabajo.",
        href: "/documentos/plann-it/informe-1.pdf",
        category: "Informe",
        size: "1,5 MB",
      },
      {
        title: "Presentación 1 — Presentación y planificación",
        description: "Propuesta inicial, objetivos del proyecto y planificación del desarrollo ágil.",
        href: "/documentos/plann-it/presentacion-1.pdf",
        category: "Presentación",
        size: "923 kB",
      },
      {
        title: "Informe 2 — Requerimientos y casos de uso",
        description: "Requerimientos funcionales, no funcionales y de implementación; diagramas y especificaciones de casos de uso.",
        href: "/documentos/plann-it/informe-2.pdf",
        category: "Informe",
        size: "1,7 MB",
      },
      {
        title: "Presentación 2 — Requerimientos y casos de uso",
        description: "Cambios acordados con el Product Owner, requerimientos y casos de uso del sistema.",
        href: "/documentos/plann-it/presentacion-2.pdf",
        category: "Presentación",
        size: "1,1 MB",
      },
      {
        title: "Informe 3 — Análisis orientado a objetos",
        description: "Documentación de la etapa de análisis orientado a objetos mediante OMT++.",
        href: "/documentos/plann-it/informe-3.pdf",
        category: "Informe",
        size: "3,0 MB",
      },
      {
        title: "Presentación 3 — Análisis orientado a objetos",
        description: "Modelo de objetos, diccionario de datos, análisis del comportamiento y especificación de la interfaz.",
        href: "/documentos/plann-it/presentacion-3.pdf",
        category: "Presentación",
        size: "1,0 MB",
      },
      {
        title: "Informe 4 — Diseño orientado a objetos",
        description: "Documentación de la etapa de diseño orientado a objetos mediante OMT++.",
        href: "/documentos/plann-it/informe-4.pdf",
        category: "Informe",
        size: "4,0 MB",
      },
    ],
    images: [
      "/images/proyectos/plann-it/06-tablero.png",
      "/images/proyectos/plann-it/07-carta-gantt.png",
      "/images/proyectos/plann-it/08-metricas.png",
      "/images/proyectos/plann-it/12-detalle-proyecto.png",
      "/images/proyectos/plann-it/09-admin-miembro.png",
      "/images/proyectos/plann-it/05-chat.png",
      "/images/proyectos/plann-it/02-inicio.png",
      "/images/proyectos/plann-it/03-proyectos.png",
      "/images/proyectos/plann-it/11-invitaciones.png",
      "/images/proyectos/plann-it/10-perfil.png",
      "/images/proyectos/plann-it/04-editar-perfil.png",
      "/images/proyectos/plann-it/01-login.png",
    ],
    imageLabels: [
      "Tablero de tareas por estado",
      "Carta Gantt del proyecto",
      "Métricas de participación",
      "Detalle del proyecto",
      "Equipo, roles y permisos",
      "Chat del equipo",
      "Tareas pendientes con vencimiento",
      "Listado de proyectos",
      "Invitación a colaborar",
      "Perfil de usuario",
      "Edición de perfil",
      "Inicio de sesión",
    ],
    imageAspect: "portrait",
  },
  {
    slug: "fundacion-llaftun",
    title: "Web Fundación Llaftun",
    accent: "lime",
    featured: true,
    category: "Desarrollo web · Cliente real",
    highlights: ["Requerimientos", "Rediseño", "Migración"],
    summary: "Migración y rediseño del sitio web de una fundación, con cliente real.",
    problem:
      "El sitio de la fundación estaba en WordPress con limitaciones de mantenimiento y de integración con sus redes sociales, y no era responsive.",
    solution:
      "Migración a una solución de desarrollo web propia, con diseño responsive e integración de contenido de Instagram, a partir del levantamiento de requerimientos directamente con el cliente.",
    decisions: [
      "Levantamiento de requerimientos iterativo con el cliente para acotar alcance y prioridades reales, no solo técnicas.",
      "Migración fuera de WordPress para reducir dependencia de plugins y facilitar mantenimiento a futuro.",
      "Diseño responsive priorizado porque gran parte del tráfico de la fundación llega desde redes sociales en móvil.",
    ],
    stack: ["Desarrollo web", "Diseño responsive", "Integración Instagram API"],
    role: "Levantamiento de requerimientos con el cliente, desarrollo del sitio y migración de contenido.",
    status: "Cliente real",
    // Las fotografías del sitio muestran beneficiarios reales de la fundación,
    // incluidos menores: en estas capturas van desenfocadas.
    images: [
      "/images/proyectos/fundacion-llaftun/01-inicio.jpg",
      "/images/proyectos/fundacion-llaftun/04-proyectos.jpg",
      "/images/proyectos/fundacion-llaftun/03-areas-de-accion.jpg",
      "/images/proyectos/fundacion-llaftun/02-quienes-somos.jpg",
      "/images/proyectos/fundacion-llaftun/06-material-educativo.jpg",
      "/images/proyectos/fundacion-llaftun/05-servicios.jpg",
      "/images/proyectos/fundacion-llaftun/07-alianzas.jpg",
      "/images/proyectos/fundacion-llaftun/08-transparencia.jpg",
    ],
    imageLabels: [
      "Portada",
      "Catálogo de proyectos",
      "Áreas de acción",
      "Quiénes somos",
      "Material educativo descargable",
      "Servicios y líneas de acción",
      "Alianzas y colaboraciones",
      "Transparencia y documentos",
    ],
  },
  {
    slug: "scrimsync",
    title: "Scrimsync",
    accent: "slate",
    category: "Aplicación web",
    highlights: ["Equipos", "Horarios", "Entrenamientos"],
    summary: "Sistema de gestión y organización de scrims y entrenamientos para equipos.",
    problem:
      "Los equipos organizaban scrims (partidas de práctica) y entrenamientos de forma manual, sin un sistema centralizado para coordinar horarios y disponibilidad.",
    solution:
      "Sistema web para gestionar y organizar scrims y entrenamientos de equipos, desarrollado con PHP y desplegado sobre Apache.",
    decisions: [
      "Stack PHP + Apache por simplicidad de despliegue y mantenimiento sobre hosting convencional.",
      "Modelo orientado a equipos y sesiones para reflejar cómo se organizan realmente los entrenamientos.",
    ],
    stack: ["PHP", "CSS", "Apache"],
    role: "Diseño y desarrollo completo del sistema.",
    status: "v1.0 en desarrollo",
    repository: "Privado",
    // La tarjeta de la portada muestra la portada pública al frente y el
    // calendario y la gestión de equipo asomando detrás.
    coverImages: [
      "/images/proyectos/scrimsync/01-inicio.png",
      "/images/proyectos/scrimsync/03-calendario.png",
      "/images/proyectos/scrimsync/06-gestion-equipo.png",
    ],
    images: [
      "/images/proyectos/scrimsync/03-calendario.png",
      "/images/proyectos/scrimsync/05-busqueda-equipos.png",
      "/images/proyectos/scrimsync/06-gestion-equipo.png",
      "/images/proyectos/scrimsync/04-notificaciones.png",
      "/images/proyectos/scrimsync/01-inicio.png",
      "/images/proyectos/scrimsync/08-panel-admin.png",
      "/images/proyectos/scrimsync/07-perfil.png",
      "/images/proyectos/scrimsync/02-login.png",
    ],
    imageLabels: [
      "Calendario de scrims por estado",
      "Búsqueda de equipos con filtros",
      "Roster, roles y disponibilidad",
      "Centro de notificaciones",
      "Portada pública",
      "Panel de administración",
      "Perfil de usuario",
      "Inicio de sesión",
    ],
  },
  {
    slug: "tesis-ntt-pqc",
    title: "Tesis — Auditoría de implementaciones NTT con LLM",
    accent: "indigo",
    category: "Investigación · Seguridad",
    highlights: ["Código C/C++", "Análisis con LLM", "Revisión de riesgos"],
    summary: "Investigación en criptografía postcuántica: seguridad de implementaciones NTT asistida por LLM.",
    problem:
      "Las implementaciones de Number Theoretic Transform (NTT), usadas en esquemas de criptografía postcuántica, pueden contener vulnerabilidades de canal lateral (side-channel) difíciles de detectar con revisión manual.",
    solution:
      "Metodología de auditoría de implementaciones NTT en C/C++ apoyada en un LLM para asistir en el análisis de seguridad, con foco en identificar patrones de riesgo de side-channel.",
    decisions: [
      "Foco en NTT por su rol central en esquemas postcuánticos como Kyber/Dilithium.",
      "Uso de un LLM como herramienta de apoyo al análisis, no como reemplazo del razonamiento criptográfico del auditor.",
    ],
    stack: ["C", "C++", "Criptografía postcuántica", "Side-channel", "LLM", "Análisis de seguridad"],
    role: "Investigación, diseño de metodología e implementación del análisis.",
    status: "Investigación en curso",
    repository: "Privado",
  },
];
