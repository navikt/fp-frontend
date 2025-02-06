/**
 * Denne funksjonen sikrer at alle tilfeller blir håndtert i compile time
 */
export function assertUnreachable(x: never): never {
  throw new Error('Uventet enum verdi: alle tilfeller skal må håndteres:', x);
}
