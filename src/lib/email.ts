import { personalInfo } from "@/data/personal-info";

export function getGmailComposeUrl(subject: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.contacts.email)}&su=${encodeURIComponent(subject)}` as const;
}
