import { TIDENES_ENDE } from '@navikt/ft-utils';

type Periode = { fom: string; tom: string | null };

export const sorterPerioder = (a: Periode, b: Periode) => {
  const dateAEnd = a.tom ? new Date(a.tom) : new Date(TIDENES_ENDE);
  const dateBEnd = b.tom ? new Date(b.tom) : new Date(TIDENES_ENDE);

  if (dateAEnd > dateBEnd) return -1;
  if (dateAEnd < dateBEnd) return 1;

  const dateAStart = new Date(a.fom);
  const dateBStart = new Date(b.fom);

  if (dateAStart > dateBStart) return -1;
  if (dateAStart < dateBStart) return 1;

  return 0;
};
