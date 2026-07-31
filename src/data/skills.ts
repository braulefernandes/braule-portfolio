import type { SkillCategory } from "@/types";

export const featuredSkills = ["React", "Next.js", "Python", "Java"];

export const skillCategories = [
  {
    id: "frontend",
    name: { pt: "Frontend", en: "Frontend" },
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: { pt: "Backend", en: "Backend" },
    skills: ["Python", "FastAPI", "Django", "Java", "APIs REST"],
  },
  {
    id: "databases",
    name: { pt: "Banco de dados", en: "Databases" },
    skills: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    id: "tools",
    name: { pt: "Ferramentas e outras áreas", en: "Tools and other areas" },
    skills: ["Git", "GitHub", "Figma", "Power BI", "Roboflow", "YOLOv8"],
  },
] satisfies SkillCategory[];
