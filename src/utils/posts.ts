/**
 * Post utility functions
 * Provides centralized logic for fetching and filtering blog posts
 */

import { getReadingTime } from "./reading-time";

export interface Post {
  url: string;
  title: string;
  description: string;
  pubDate: string;
  tags: string[];
  readingTime?: number;
  [key: string]: any;
}

/**
 * Fetches all blog posts from the posts directory
 * @param includeReadingTime - Whether to calculate reading time for each post
 * @returns Array of posts sorted by date (newest first)
 */
export function getPosts(includeReadingTime: boolean = false): Post[] {
  const postFiles = import.meta.glob("../pages/posts/*.md", { eager: true });

  const posts = Object.entries(postFiles)
    .map(([path, post]) => {
      const content = (post as any).compiledContent?.() || '';
      const url = path.replace("../pages/", "/").replace(".md", "");
      const frontmatter = (post as any).frontmatter;

      return {
        url,
        ...frontmatter,
        ...(includeReadingTime && { readingTime: getReadingTime(content) })
      };
    })
    .sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );

  return posts;
}

/**
 * Filters posts by tag
 * @param posts - Array of posts to filter
 * @param tag - Tag to filter by
 * @returns Filtered array of posts
 */
export function getPostsByTag(posts: Post[], tag: string): Post[] {
  return posts.filter((post) => post.tags?.includes(tag));
}

/**
 * Gets all unique tags from posts
 * @param posts - Array of posts to extract tags from
 * @returns Array of unique tags
 */
export function getAllTags(posts: Post[]): string[] {
  return [...new Set(posts.flatMap((post) => post.tags || []))];
}

/**
 * Gets a count of posts per tag
 * @param posts - Array of posts to count
 * @returns Object with tag counts
 */
export function getTagCounts(posts: Post[]): Record<string, number> {
  const counts: Record<string, number> = {};

  posts.forEach(post => {
    post.tags?.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });

  return counts;
}
