import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = hasLocale(routing.locales, requestedLocale) ? requestedLocale : routing.defaultLocale;
  const messagesFile = locale === "pt" ? "pt-BR" : "en";

  return {
    locale,
    messages: (await import(`../../messages/${messagesFile}.json`)).default,
  };
});
