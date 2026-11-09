/**
 * Site configuration — Centralized site settings following Astro Rocket reference
 * This is the source of truth for all site-wide configuration
 * It mirrors current SITE_CONFIG but with additional fields for future enhancements
 */

/** Site configuration interface */
export interface SiteConfig {
  /* Core site metadata */
  url: string;
  name: string;
  description: string;
  author: string;
  email: string;
  authorImage?: string;

  /* Social media and contact links */
  socialLinks: Array<{
    platform: string;
    url: string;
    icon?: string;
    label?: string;
  }>;

  /* Header configuration */
  header: {
    showSocialLinks: boolean;
    twitter?: string;
  };

  /* Search engine verification */
  verification: {
    google: string;
    bing: string;
    shenma: string;
    baidu: string;
  };

  /* Open Graph and social image */
  ogImage: string;

  /* Blog configuration */
  blog: {
    postsPerPage: number;
    tagCloudLimit: number;
  };

  /* Services configuration */
  services: {
    perPage: number;
    tagCloudLimit: number;
  };

  /* Article features */
  articleFeatures: {
    toc: {
      enabled: boolean;
      layout: "sidebar" | "inline" | "none";
      sidebarPosition: "left" | "right";
      minHeadings: number;
      maxDepth: number;
    };
    comments: { enabled: boolean };
  };

  /* Blog image overlay */
  blogImageOverlay: boolean;

  /* Branding configuration */
  branding: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      foreground: string;
      border: string;
      ring: string;
    };
    logo: { light: string; dark: string };
    favicon: string;
  };

  /* i18n configuration (matches i18n.config.ts) */
  i18n: {
    enabled: boolean;
    locales: string[];
    defaultLocale: string;
    routing: { prefixDefaultLocale: boolean };
  };
}

export const siteConfig: SiteConfig = {
  /* Core configuration — single source of truth for canonical/OG/sitemap/llms.txt.
   * Replace with your production domain when forking this template. */
  url: process.env.SITE_URL?.trim() || "https://ji-chang-tui-jian.life",
  name: "机场life",
  description:
    "专注优质稳定网络加速与节点订阅测评指南，为出海业务、跨境电商与开发者提供多协议加速线路测速、流媒体解锁与配置教程。",
  author: "机场推荐评测团队",
  email: "contact@ji-chang-tui-jian.life",
  authorImage: "/images/author.jpg",

  /* Social links */
  socialLinks: [
    {
      platform: "site",
      url: "/about",
      label: "Contact",
    },
    {
      platform: "site",
      url: "/about",
      label: "About",
    },
    { platform: "email", url: "mailto:contact@ji-chang-tui-jian.life", label: "Email" },
  ],

  /* Header settings */
  header: {
    showSocialLinks: false,
  },

  /* Search engine verification */
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.BING_SITE_VERIFICATION || "",
    shenma: process.env.SHENMA_SITE_VERIFICATION || "",
    baidu: process.env.BAIDU_SITE_VERIFICATION || "",
  },

  /* Social image */
  ogImage: "/images/og-default.jpg",

  /* Blog configuration */
  blog: {
    postsPerPage: 10,
    tagCloudLimit: 20,
  },

  /* Services configuration */
  services: {
    perPage: 12,
    tagCloudLimit: 20,
  },

  /* Article features */
  articleFeatures: {
    toc: {
      enabled: true,
      layout: "sidebar",
      sidebarPosition: "right",
      minHeadings: 2,
      maxDepth: 3,
    },
    comments: { enabled: false },
  },

  /* Blog image overlay */
  blogImageOverlay: true,

  /* Branding */
  branding: {
    colors: {
      primary: "#171717",
      secondary: "#737373",
      accent: "#404040",
      background: "#ffffff",
      foreground: "#171717",
      border: "#e5e5e5",
      ring: "#171717",
    },
    logo: {
      light: "/logos/logo-light.svg",
      dark: "/logos/logo-dark.svg",
    },
    favicon: "/favicon.svg",
  },

  /* i18n configuration (matches i18n.config.ts) */
  i18n: {
    enabled: true,
    locales: ["en"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
} as const;

export default siteConfig;
