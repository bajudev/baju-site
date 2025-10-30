interface Post {
  url: string;
  title: string;
  tags?: string[];
  pubDate: string;
}

export function getRelatedPosts(currentUrl: string, currentTags: string[] = [], allPosts: Post[], limit = 3): Post[] {
  if (!currentTags || currentTags.length === 0) {
    return [];
  }

  return allPosts
    .filter(post => post.url !== currentUrl)
    .map(post => {
      const sharedTags = post.tags?.filter(tag => currentTags.includes(tag)) || [];
      return {
        post,
        score: sharedTags.length,
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.pubDate).getTime() - new Date(a.post.pubDate).getTime();
    })
    .slice(0, limit)
    .map(item => item.post);
}
