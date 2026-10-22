export const sortKodeverkByNavn = (a: { navn: string }, b: { navn: string }): number => a.navn.localeCompare(b.navn);
