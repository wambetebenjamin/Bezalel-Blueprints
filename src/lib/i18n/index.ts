import { en, type Messages } from "./messages/en";
import { sw } from "./messages/sw";
import { fr } from "./messages/fr";

export const locales = ["en", "sw", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  sw: "Kiswahili",
  fr: "Français",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  sw: "sw",
  fr: "fr",
};

export const messages: Record<Locale, Messages> = { en, sw, fr };

export const LOCALE_COOKIE = "bezalel-blueprints-locale";

export const CONSENT_COOKIE = "bezalel-blueprints-cookie-consent";

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export type { Messages };
