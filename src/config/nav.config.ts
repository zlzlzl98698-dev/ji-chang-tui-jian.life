/**
 * Navigation configuration — Centralized navigation structure
 * Defines main navigation links and footer sections
 * Used by Header and Footer components for consistent navigation
 */

export interface NavItem {
  /** Navigation link URL */
  href: string;
  /** Translation key for localized label */
  labelKey: string;
  /** Optional icon name for icon-only navigation items */
  icon?: string;
  /** Whether this is an external link (opens in new tab) */
  external?: boolean;
  /** Sub-navigation items for dropdown menus */
  children?: NavItem[];
}

/** Main navigation items for header */
export const mainNav: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  {
    href: "/airports",
    labelKey: "nav.airports",
    children: [
      { href: "/airports", labelKey: "nav.airports" },
      { href: "/rankings", labelKey: "nav.rankings" },
      { href: "/recommendations", labelKey: "nav.recommendations" },
    ],
  },
  { href: "/free-nodes", labelKey: "nav.freeNodes" },
  { href: "/free-trial", labelKey: "nav.freeTrial" },
  { href: "/warning", labelKey: "nav.warning" },
  {
    href: "/faq",
    labelKey: "nav.knowledgeHub",
    children: [
      { href: "/faq", labelKey: "nav.faq" },
      { href: "/clients", labelKey: "nav.clients" },
      { href: "/blog", labelKey: "nav.blog" },
      { href: "/about", labelKey: "nav.about" },
    ],
  },
];

/** Footer navigation grouped by section */
export const footerNav = {
  /** Product and service links */
  product: [
    { href: "/recommendations", labelKey: "nav.recommendations" },
    { href: "/rankings", labelKey: "nav.rankings" },
    { href: "/free-nodes", labelKey: "nav.freeNodes" },
    { href: "/free-trial", labelKey: "nav.freeTrial" },
    { href: "/warning", labelKey: "nav.warning" },
    { href: "/faq", labelKey: "nav.faq" },
    { href: "/clients", labelKey: "nav.clients" },
  ] as const,
  /** Legal pages and terms */
  legal: [
    { href: "/privacy", labelKey: "footer.privacy" },
    { href: "/terms", labelKey: "footer.terms" },
  ] as const,
  /** Social media and contact links */
  social: [
    {
      href: "/about",
      labelKey: "nav.about",
    },
    {
      href: "/contact",
      labelKey: "nav.contact",
    },
  ] as const,
} as const;

/** Helper function to get navigation items by section */
export function getFooterNav(section: keyof typeof footerNav): NavItem[] {
  return footerNav[section] as unknown as NavItem[];
}
