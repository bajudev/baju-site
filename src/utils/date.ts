/**
 * Date formatting utilities
 * Provides consistent date formatting across the site
 */

/**
 * Formats a date in long format (e.g., "Monday, January 1, 2024")
 * @param dateString - Date string or Date object
 * @returns Formatted date string
 */
export function formatDateLong(dateString: string | number | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formats a date in short format (e.g., "Jan 1, 2024")
 * @param dateString - Date string or Date object
 * @returns Formatted date string
 */
export function formatDateShort(dateString: string | number | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Formats a date for blog posts (short format)
 * @param dateString - Date string or Date object
 * @returns Formatted date string
 */
export function formatBlogDate(dateString: string | number | Date): string {
  return formatDateShort(dateString);
}

/**
 * Checks if a date is in the future
 * @param dateString - Date string or Date object
 * @returns True if date is in the future
 */
export function isFutureDate(dateString: string | number | Date): boolean {
  return new Date(dateString) > new Date();
}

/**
 * Checks if a date is in the past
 * @param dateString - Date string or Date object
 * @returns True if date is in the past
 */
export function isPastDate(dateString: string | number | Date): boolean {
  return new Date(dateString) <= new Date();
}
