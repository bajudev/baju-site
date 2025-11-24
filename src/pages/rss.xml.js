import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = Object.entries(
    import.meta.glob("./posts/*.md", { eager: true })
  ).map(([path, post]) => ({
    ...post.frontmatter,
    link: path.replace("./", "/").replace(".md", ""),
  }));

  return rss({
    title: "baju | Blog",
    description:
      "baju blog",
    site: context.site || "https://baju.dev",
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.pubDate),
      description: post.description,
      link: post.link,
    })),
    customData: `<language>en-gb</language>`,
  });
}
