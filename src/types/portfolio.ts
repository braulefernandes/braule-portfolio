export type PortfolioLocale = "pt" | "en";
export type LocalizedText = Record<PortfolioLocale, string>;
export type LocalizedStringList = Record<PortfolioLocale, string[]>;
export type ProjectStatus = "WIP" | "DONE";
export type ProjectVisual = "route" | "tasks" | "network" | "detection";
export type ExperienceKind = "professional" | "academic";
export type SocialIcon = "github" | "linkedin" | "email";
export type ExternalUrl = `https://${string}` | `http://${string}`;
export type EmailUrl = `mailto:${string}`;

export interface ContactInfo {
  email: string;
  github: ExternalUrl;
  linkedin: ExternalUrl;
}

export interface PersonalInfo {
  name: string;
  visualSignature: string;
  compactSignature: string;
  professionalTitle: LocalizedText;
  shareTitle: string;
  heroDescription: LocalizedText;
  aboutTitle: LocalizedText;
  aboutParagraphs: Record<PortfolioLocale, [string, string]>;
  complementaryEducation: LocalizedText;
  availability: LocalizedText;
  roles: LocalizedStringList;
  goals: LocalizedStringList;
  location: {
    city: string;
    region: string;
    countryCode: string;
    display: LocalizedText;
  };
  contactMessage: LocalizedText;
  contacts: ContactInfo;
  seo: {
    title: LocalizedText;
    description: LocalizedText;
    keywords: Record<PortfolioLocale, string[]>;
  };
}

export interface Education {
  id: string;
  degree: LocalizedText;
  institution: LocalizedText;
  institutionAcronym: string;
  startYear: string;
  expectedGraduation: string;
  location: LocalizedText;
}

export interface ProjectRepository {
  label: string;
  url: ExternalUrl;
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  category: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  technologies: string[];
  repositories: ProjectRepository[];
  visual: ProjectVisual;
}

export interface Experience {
  id: string;
  kind: ExperienceKind;
  role: LocalizedText;
  organization: LocalizedText;
  period?: LocalizedText;
  type?: LocalizedText;
  location?: LocalizedText;
  description: LocalizedText;
}

export interface SkillCategory {
  id: "frontend" | "backend" | "databases" | "tools";
  name: LocalizedText;
  skills: string[];
}

export interface SocialLink {
  id: SocialIcon;
  url: ExternalUrl | EmailUrl;
  icon: SocialIcon;
  external: boolean;
}
