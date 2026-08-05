import type { MetadataRoute } from "next";
import { personalInfo } from "@/data/personal-info";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: personalInfo.seo.title.en,
    short_name: "Braule Portfolio",
    description: personalInfo.seo.description.pt,
    start_url: "/pt",
    display: "standalone",
    background_color: "#07070a",
    theme_color: "#7c3aed",
    lang: "pt-BR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
