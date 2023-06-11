import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * handles class name with tailwindcss
 * @param inputs {ClassValue[]}
 * @returns optimed class
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * get fallback name of an user
 * @param name string
 * @returns string
 */
export function getFallbackName(name: string): string {
  const n = name.trim()
  const lastIndexOfSpace = n.lastIndexOf(" ") + 1
  return n.substring(0, 1) + n.substring(lastIndexOfSpace, lastIndexOfSpace + 1)
}
