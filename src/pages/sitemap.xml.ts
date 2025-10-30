import type { APIRoute } from "astro";
import { SITE } from "../config";

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site || SITE.url;

  const posts = Object.entries(
    import.meta.glob("./posts/*.md", { eager: true })
  ).map(([path, post]) => {
    const url = path.replace("./", "/").replace(".md", "");
    const frontmatter = (post as any).frontmatter;
    return {
      url: `${baseUrl}${url}`,
      lastmod: frontmatter.pubDate
        ? new Date(frontmatter.pubDate).toISOString()
        : new Date().toISOString(),
    };
  });

  const tags = [...new Set(posts.flatMap((post) => (post as any).tags))];

  const staticPages = [
    { url: `${baseUrl}/`, priority: "1.0" },
    { url: `${baseUrl}/blog`, priority: "0.9" },
    { url: `${baseUrl}/projects`, priority: "0.9" },
    { url: `${baseUrl}/links`, priority: "0.7" },
    { url: `${baseUrl}/music`, priority: "0.7" },
  ];

  const tagPages = tags.map((tag) => ({
    url: `${baseUrl}/tags/${tag}`,
    priority: "0.6",
  }));

  const allPages = [...staticPages, ...posts, ...tagPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>${
      (page as any).lastmod
        ? `
    <lastmod>${(page as any).lastmod}</lastmod>`
        : ""
    }${
      (page as any).priority
        ? `
    <priority>${(page as any).priority}</priority>`
        : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
