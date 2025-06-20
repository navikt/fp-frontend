import type { UttakPeriodeType } from '@navikt/fp-kodeverk';

export type AnnenforelderUttakEøsPeriode = Readonly<{
  fom: string;
  tom: string;
  trekkonto: UttakPeriodeType;
  trekkdager: number;
}>;
