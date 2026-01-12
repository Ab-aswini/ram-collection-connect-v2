import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(path: string | undefined | null) {
  if (!path) return "";
  if (path.startsWith("http")) return path;

  const baseUrl = import.meta.env.BASE_URL; // e.g. /ram-collection-connect-v2/

  // If path already starts with base url (e.g. from CMS), return it
  if (path.startsWith(baseUrl)) return path;

  // If path starts with slash but not base url (e.g. legacy data), prepend base
  if (path.startsWith("/")) {
    // Strip leading slash to avoid double slash if baseUrl has trailing slash
    return `${baseUrl}${path.slice(1)}`;
  }

  return path;
}
