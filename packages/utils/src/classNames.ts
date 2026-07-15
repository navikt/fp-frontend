type ClassValue = string | false | null | undefined;

export const classNames = (...klasser: ClassValue[]): string => klasser.filter(Boolean).join(' ');
