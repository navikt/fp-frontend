import { dateFormat, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

type Periode = { fom: string; tom: string };

export function getFormatertPeriode(periode: Periode) {
  return `${dateFormat(periode.fom)} – ${dateFormat(periode.tom)}`;
}

export function splitPeriodePåDato(periode: Periode, splitDato: string): [Periode, Periode] {
  return [
    {
      ...periode,
      tom: splitDato,
    },
    {
      ...periode,
      fom: dayjs(splitDato).add(1, 'day').format(ISO_DATE_FORMAT),
    },
  ];
}

export function periodeErMerEnnEnDag(periode: Periode): boolean {
  return periode.fom !== periode.tom;
}
