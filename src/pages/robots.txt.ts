import { siteConfig } from "../config/site.config";

export async function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: bingbot",
    "Allow: /",
    "",
    "User-agent: Baiduspider",
    "Allow: /",
    "",
    "User-agent: yisouspider",
    "Allow: /",
    "",
    `Sitemap: ${siteConfig.url}/sitemap-index.xml`,
    `Sitemap: ${siteConfig.url}/sitemap.xml`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
