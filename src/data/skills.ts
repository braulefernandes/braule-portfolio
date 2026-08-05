import type { CoreTechnology, SkillCategory } from "@/types";

export const coreTechnologies = [
  {
    id: "react",
    name: "React",
    area: { pt: "Frontend", en: "Frontend" },
    description: {
      pt: "Interfaces componentizadas e experiências de usuário interativas.",
      en: "Component-based interfaces and interactive user experiences.",
    },
    visual: "react",
  },
  {
    id: "next",
    name: "Next.js",
    area: { pt: "Full Stack", en: "Full Stack" },
    description: {
      pt: "Aplicações web modernas, rotas, renderização e integração com APIs.",
      en: "Modern web applications, routing, rendering, and API integration.",
    },
    visual: "next",
  },
  {
    id: "python",
    name: "Python",
    area: { pt: "Backend · Dados · IA", en: "Backend · Data · AI" },
    description: {
      pt: "APIs, automações, análise de dados e projetos de inteligência artificial.",
      en: "APIs, automation, data analysis, and artificial intelligence projects.",
    },
    visual: "python",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    area: { pt: "Backend · APIs", en: "Backend · APIs" },
    description: {
      pt: "Construção de APIs modernas, rápidas e bem estruturadas com Python.",
      en: "Building modern, fast, and well-structured APIs with Python.",
    },
    visual: "fastapi",
  },
] satisfies CoreTechnology[];

export const featuredSkills = coreTechnologies.map(({ name }) => name);

export const skillCategories = [
  {
    id: "frontend",
    name: { pt: "Frontend", en: "Frontend" },
    description: {
      pt: "Interfaces modernas, responsivas e focadas na experiência do usuário.",
      en: "Modern, responsive interfaces focused on the user experience.",
    },
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    icon: "frontend",
  },
  {
    id: "backend",
    name: { pt: "Backend", en: "Backend" },
    description: {
      pt: "APIs, regras de negócio e integração entre aplicações e serviços.",
      en: "APIs, business logic, and integration between applications and services.",
    },
    skills: ["Python", "FastAPI", "Django", "Java", "APIs REST"],
    icon: "backend",
  },
  {
    id: "databases",
    name: { pt: "Banco de dados", en: "Databases" },
    description: {
      pt: "Modelagem, persistência e organização de dados relacionais.",
      en: "Modeling, persistence, and organization of relational data.",
    },
    skills: ["PostgreSQL", "MySQL", "Supabase"],
    icon: "databases",
  },
  {
    id: "tools",
    name: { pt: "Ferramentas e outras áreas", en: "Tools & Other Areas" },
    description: {
      pt: "Versionamento, design, análise de dados e inteligência artificial.",
      en: "Version control, design, data analysis, and artificial intelligence.",
    },
    skills: ["Git", "GitHub", "Figma", "Power BI", "Roboflow", "YOLOv8"],
    icon: "tools",
  },
] satisfies SkillCategory[];
