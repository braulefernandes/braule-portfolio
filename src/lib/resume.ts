import { existsSync } from "node:fs";
import { join } from "node:path";

export const resumePath = "/curriculum/braule-fernandes-curriculo.pdf";

export function hasPublishedResume() {
  return existsSync(join(process.cwd(), "public", "curriculum", "braule-fernandes-curriculo.pdf"));
}
