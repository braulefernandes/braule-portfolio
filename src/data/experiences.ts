import type { Experience, ExperienceKind } from "@/types";

export const experiences = [
  {
    id: "unifor-clinical-research",
    kind: "professional",
    role: { pt: "Estagiário de TI", en: "IT Intern" },
    organization: { pt: "Unidade de Pesquisa Clínica da UNIFOR", en: "Unidade de Pesquisa Clínica da UNIFOR" },
    period: { pt: "2025 — Atual", en: "2025 — Present" },
    location: { pt: "Fortaleza, Ceará", en: "Fortaleza, Ceará, Brazil" },
    description: {
      pt: "Atuei no desenvolvimento de atividades de pesquisa clínica, com foco em análise de dados, elaboração, organização e automação de planilhas, além do apoio a projetos de inovação nas áreas de tecnologia e medicina. Contribuí em reuniões técnicas e ofereci suporte à equipe em demandas que exigiram conhecimentos técnicos.",
      en: "I worked on the development of clinical research activities, focusing on data analysis and the creation, organization, and automation of spreadsheets, as well as supporting innovation projects in the fields of technology and medicine. I contributed to technical meetings and provided support to the team on tasks requiring technical expertise.",
    },
    isCurrent: true,
    visual: "technology",
  },
  {
    id: "expo-direito",
    kind: "professional",
    role: { pt: "Suporte Técnico", en: "Technical Support" },
    organization: { pt: "EXPO Direito", en: "EXPO Direito" },
    type: { pt: "2024 - Evento presencial", en: "2024 - In-person Event" },
    description: {
      pt: "Atuação no suporte técnico dos computadores utilizados nas apresentações do palco principal, auxiliando na preparação dos equipamentos, acompanhamento das exibições e resolução de problemas durante o evento. Também houve colaboração em diferentes demandas operacionais necessárias para a realização do evento.",
      en: "Provided technical support for the computers used during presentations on the main stage, helping prepare equipment, monitor presentations, and resolve issues throughout the event. Also contributed to operational tasks required for the event to run smoothly.",
    },
    visual: "support",
  },
  {
    id: "casa-do-pao",
    kind: "professional",
    role: { pt: "Auxiliar Administrativo e Contábil", en: "Administrative and Accounting Assistant" },
    organization: { pt: "Padaria Casa do Pão", en: "Padaria Casa do Pão" },
    period: { pt: "2022 — 2024", en: "2022 — 2024" },
    location: { pt: "Fortaleza, Ceará", en: "Fortaleza, Ceará, Brazil" },
    description: {
      pt: "Suporte às rotinas administrativas, organização de documentos, controle de estoque, atendimento a fornecedores e elaboração de planilhas.",
      en: "Supported administrative routines, document organization, inventory control, supplier communication, and spreadsheet preparation.",
    },
    visual: "administration",
  },
] satisfies Experience[];

export function getExperiencesByKind(kind: ExperienceKind): Experience[] {
  return experiences.filter((experience) => experience.kind === kind);
}
