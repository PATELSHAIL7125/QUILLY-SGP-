import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from 'clsx'; // Import clsx and ClassValue

export function cn(...inputs: ClassValue[]) { // Fix typing for inputs
    return twMerge(clsx(inputs)); // Ensure clsx is called properly
}
