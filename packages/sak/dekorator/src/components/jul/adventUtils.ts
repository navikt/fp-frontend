const DAG_I_MS = 24 * 60 * 60 * 1000;

const tilDagnummer = (dato: Date): number => Date.UTC(dato.getFullYear(), dato.getMonth(), dato.getDate()) / DAG_I_MS;

/** Fjerde søndag i advent er siste søndag før 1. juledag (julaften kan være fjerde søndag i advent). */
const finnFørsteSøndagIAdvent = (år: number): number => {
  const julaften = new Date(år, 11, 24);
  return tilDagnummer(julaften) - julaften.getDay() - 21;
};

export type Adventsstatus = { antallTenteLys: number; erJul: boolean };

/**
 * Lysene vises fra første søndag i advent til og med trettende dag jul (6. januar).
 * Det tennes ett nytt lys hver søndag i advent, og alle fire brenner fra fjerde søndag og ut julen.
 */
export const finnAdventsstatus = (dato: Date): Adventsstatus | undefined => {
  if (dato.getMonth() === 0 && dato.getDate() <= 6) {
    return { antallTenteLys: 4, erJul: true };
  }
  if (dato.getMonth() !== 10 && dato.getMonth() !== 11) {
    return undefined;
  }

  const dagerSidenFørsteAdvent = tilDagnummer(dato) - finnFørsteSøndagIAdvent(dato.getFullYear());
  if (dagerSidenFørsteAdvent < 0) {
    return undefined;
  }

  return {
    antallTenteLys: Math.min(4, Math.floor(dagerSidenFørsteAdvent / 7) + 1),
    erJul: dato.getMonth() === 11 && dato.getDate() >= 25,
  };
};

/** Juledekoren (krans og pyntet tittel) vises fra og med 1. november til og med trettende dag jul (6. januar). */
export const erJuletid = (dato: Date): boolean =>
  dato.getMonth() === 10 || dato.getMonth() === 11 || (dato.getMonth() === 0 && dato.getDate() <= 6);
