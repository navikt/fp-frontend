import type { GraderingAvslagÅrsak, PeriodeResultatÅrsak, StonadskontoType } from '@navikt/fp-kodeverk';

export type UttakAktivitet = {
  stønadskontoType: StonadskontoType;
  weeks: string;
  days: string;
  utbetalingsgrad: string;
};

export type UttakAktivitetType = {
  begrunnelse?: string;
  erOppfylt?: boolean;
  periodeAarsak: PeriodeResultatÅrsak;
  graderingInnvilget: boolean;
  graderingAvslagAarsak: GraderingAvslagÅrsak;
  samtidigUttaksprosent?: string;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  oppholdArsak: string;
  aktiviteter: UttakAktivitet[];
};
