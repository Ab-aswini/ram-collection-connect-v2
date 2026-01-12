import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(path: string | undefined | null) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) {
    const baseUrl = import.meta.env.BASE_URL;
    // content/site-settings.json paths start with slash, e.g. /images/hero.jpg
    // baseUrl usually ends with slash, e.g. /repo/
    // so we strip leading slash from path to avoid //images
    return `${baseUrl}${path.slice(1)}`;
  }
  return path;
}
