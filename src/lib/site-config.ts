// To add a language: extend this union (e.g. "en" | "id"), add the code to
// SITE_CONFIG.locales, add label/prefix entries below, create a matching
// translations file in src/i18n, and add localized content + [locale] routes.
export type Locale = "en";

export const SITE_CONFIG = {
  url: "https://ji-chang-tui-jian.life",
  /** Default locale for fallback. */
  defaultLocale: "en" as const,
  /** Supported locales. */
  locales: ["en"] as const,
  /** Human-readable locale labels. */
  localeLabels: {
    en: "English",
  } as const,
  /** Short locale codes for URL prefixes. */
  localePrefixes: {
    en: "en",
  } as const,
  /** Site name for metadata and JSON-LD. */
  name: "机场life",
  /** Short description for metadata. */
  description: "优质稳定网络加速与节点订阅测评指南，提供全方位翻墙机场测速、协议解析、优惠折扣及新手配置教程。",
} as const;
