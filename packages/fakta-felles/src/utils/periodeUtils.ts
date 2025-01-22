import { dateFormat, TIDENES_ENDE } from '@navikt/ft-utils';

type Periode = { fom?: string | null; tom?: string | null };

export const sorterPerioder = (a: Periode, b: Periode) => {
  const dateAEnd = new Date(a.tom ?? TIDENES_ENDE);
  const dateBEnd = new Date(b.tom ?? TIDENES_ENDE);

  if (dateAEnd > dateBEnd) return -1;
  if (dateAEnd < dateBEnd) return 1;

  if (a.fom && !b.fom) return -1;
  if (!a.fom && b.fom) return 1;

  if (a.fom && b.fom) {
    const dateAStart = new Date(a.fom);
    const dateBStart = new Date(b.fom);

    if (dateAStart > dateBStart) return -1;
    if (dateAStart < dateBStart) return 1;
  }
  return 0;
};

export const formaterPeriode = (periode?: Periode) => {
  if (periode && periode?.fom)
    return `${dateFormat(periode.fom)} – ${periode?.tom && periode.tom !== TIDENES_ENDE ? dateFormat(periode.tom) : ''}`;
  return '-';
};
