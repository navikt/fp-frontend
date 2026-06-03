import type { GraderingAvslagÅrsak, OppholdÅrsakType, PeriodeResultatÅrsak, UttakPeriodeType } from '@navikt/fp-types';

export type UttakAktivitet = {
  stønadskontoType: UttakPeriodeType;
  weeks: string;
  days: string;
  utbetalingsgrad: string;
};

export type UttakAktivitetType = {
  begrunnelse?: string;
  erOppfylt?: boolean;
  periodeResultatÅrsak?: PeriodeResultatÅrsak;
  graderingInnvilget: boolean;
  graderingAvslagÅrsak?: GraderingAvslagÅrsak;
  samtidigUttaksprosent?: string;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  oppholdÅrsak: OppholdÅrsakType;
  aktiviteter: UttakAktivitet[];
};
