import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function putAcessToken(token: string) {
  localStorage.setItem("token", token);
}

export function getAccessToken() {
  return localStorage.getItem("token");
}
