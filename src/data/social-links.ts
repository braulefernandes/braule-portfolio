import type { SocialLink } from "@/types";
import { personalInfo } from "./personal-info";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    url: personalInfo.contacts.github,
    icon: "github",
    external: true,
  },
  {
    id: "linkedin",
    url: personalInfo.contacts.linkedin,
    icon: "linkedin",
    external: true,
  },
  {
    id: "email",
    url: `mailto:${personalInfo.contacts.email}`,
    icon: "email",
    external: false,
  },
];
