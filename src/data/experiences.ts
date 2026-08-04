import type { Experience, ExperienceKind } from "@/types";

export const experiences = [
  {
    id: "unifor-clinical-research",
    kind: "professional",
    role: { pt: "Estagiário de TI", en: "IT Intern" },
    organization: { pt: "Unidade de Pesquisa Clínica da UNIFOR", en: "UNIFOR Clinical Research Unit" },
    period: { pt: "2025 — Atual", en: "2025 — Present" },
    location: { pt: "Fortaleza, Ceará", en: "Fortaleza, Brazil" },
    description: {
      pt: "Atuação em atividades relacionadas à análise de dados, elaboração e organização de planilhas, suporte técnico e apoio a projetos de inovação nas áreas de tecnologia e medicina.",
      en: "Work involving data analysis, spreadsheet creation and organization, technical support, and assistance with innovation projects across technology and medicine.",
    },
    isCurrent: true,
    visual: "technology",
  },
  {
    id: "expo-direito",
    kind: "professional",
    role: { pt: "Suporte Técnico", en: "Technical Support" },
    organization: { pt: "EXPO Direito", en: "EXPO Direito" },
    type: { pt: "2024 - Evento presencial", en: "2024 - In-person event" },
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
    location: { pt: "Fortaleza, Ceará", en: "Fortaleza, Brazil" },
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
