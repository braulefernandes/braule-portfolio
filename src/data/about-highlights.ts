import type { AboutHighlight } from "@/types";

export const aboutHighlights = [
  {
    id: "education",
    eyebrow: { pt: "Formação", en: "Education" },
    title: { pt: "Ciência da Computação", en: "Computer Science" },
    subtitle: {
      pt: "Universidade de Fortaleza — UNIFOR",
      en: "Universidade de Fortaleza — UNIFOR",
    },
    meta: { pt: "Conclusão prevista para 2026.2", en: "Expected Graduation: Second Semester of 2026" },
    icon: "education",
    variant: "education",
  },
  {
    id: "current-role",
    eyebrow: { pt: "Atuação atual", en: "Current role" },
    title: { pt: "Estagiário de TI", en: "IT Intern" },
    subtitle: {
      pt: "Unidade de Pesquisa Clínica — UNIFOR",
      en: "Unidade de Pesquisa Clínica — UNIFOR",
    },
    description: {
      pt: "Tecnologia, dados e inovação aplicados à área da saúde.",
      en: "Technology, data, and innovation applied to healthcare.",
    },
    icon: "activity",
    variant: "current-role",
  },
  {
    id: "professional-focus",
    eyebrow: { pt: "Foco profissional", en: "Professional Focus" },
    title: { pt: "Full Stack", en: "Full Stack" },
    subtitle: { pt: "Frontend · Backend", en: "Frontend · Backend" },
    description: {
      pt: "Aplicações web, APIs e soluções digitais bem estruturadas.",
      en: "Well-structured web applications, APIs, and digital solutions.",
    },
    icon: "code",
    variant: "focus",
  },
  {
    id: "opportunities",
    eyebrow: { pt: "Oportunidades", en: "Opportunities" },
    title: { pt: "Disponível", en: "Available" },
    description: {
      pt: "Desenvolvedor Júnior · Freelance",
      en: "Junior Developer · Freelance Projects",
    },
    meta: { pt: "Fortaleza, Ceará", en: "Fortaleza, Ceará, Brazil" },
    icon: "opportunity",
    variant: "availability",
  },
] satisfies AboutHighlight[];
