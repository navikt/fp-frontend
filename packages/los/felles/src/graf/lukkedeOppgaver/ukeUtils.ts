import dayjs from 'dayjs';

/**
 * Returnerer ISO-ukedag: 1=Mandag, 2=Tirsdag, ..., 7=Søndag.
 */
export const getIsoUkedag = (dato: dayjs.Dayjs): number => {
  const dag = dato.day();
  return dag === 0 ? 7 : dag;
};

/**
 * Gitt en dato, returneres dato for mandag innenfor samme ISO-uke
 */
export const startAvIsoUke = (dato: dayjs.Dayjs): dayjs.Dayjs => {
  const isoUkedag = getIsoUkedag(dato);
  return dato.subtract(isoUkedag - 1, 'day').startOf('day');
};
