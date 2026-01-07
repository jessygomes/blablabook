/**
 * Convertit un chemin d'upload relatif en URL vers le proxy Next.js
 * @param path - Le chemin relatif (ex: "/uploads/profiles/image.jpg")
 * @returns L'URL vers le proxy Next.js ou le chemin original
 */
export function getUploadUrl(path: string | null | undefined): string {
  if (!path) return "/default-profile.png";

  // Les images /uploads sont servies via le proxy API de Next.js
  // qui communique avec le backend en interne
  if (path.startsWith("/uploads")) {
    return `/api${path}`;
  }

  return path;
}
