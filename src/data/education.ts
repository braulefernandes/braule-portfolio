import type { Education } from "@/types";

export const education = {
  id: "computer-science-unifor",
  degree: {
    pt: "Bacharelado em Ciência da Computação",
    en: "Bachelor's Degree in Computer Science",
  },
  institution: {
    pt: "Universidade de Fortaleza — UNIFOR",
    en: "Universidade de Fortaleza — UNIFOR",
  },
  institutionAcronym: "UNIFOR",
  startYear: "2023",
  expectedGraduation: "2026.2",
  location: { pt: "Fortaleza, Ceará", en: "Fortaleza, Ceará, Brazil" },
} satisfies Education;
