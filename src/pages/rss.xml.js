import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = Object.entries(
    import.meta.glob('./posts/*.md', { eager: true })
  ).map(([path, post]) => ({
    ...post.frontmatter,
    link: path.replace('./', '/').replace('.md', ''),
  }));

  return rss({
    title: 'setofr | Blog',
    description: 'Computer science student sharing thoughts on programming, algorithms, and technology',
    site: context.site || 'https://setofr.me',
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.pubDate),
      description: post.description,
      link: post.link,
    })),
    customData: `<language>en-us</language>`,
  });
}