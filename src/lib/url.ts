/**
 * Prefixes site-relative paths from the content (such as `/uploads/photo.jpg`) with the base path,
 * so the site also works from a subfolder like studioroor.github.io/zomers-online/.
 */
export function withBase(path: string | undefined): string | undefined {
  if (!path?.startsWith('/') || path.startsWith('//')) return path
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path
}
