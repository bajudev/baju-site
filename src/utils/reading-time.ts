export function getReadingTime(content: string | unknown): number {
  if (typeof content !== 'string' || !content) {
    return 1;
  }
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
