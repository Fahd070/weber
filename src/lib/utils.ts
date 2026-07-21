import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Weber's official class name composition and conflict-resolution helper
 * (DECISIONS.md WD-135). Composes clsx (conditional/array/object class
 * joining) then tailwind-merge (resolves conflicting Tailwind utilities so
 * a later class reliably wins over an earlier one).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
