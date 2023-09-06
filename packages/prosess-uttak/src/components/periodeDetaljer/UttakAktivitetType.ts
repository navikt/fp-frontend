export type UttakAktivitet = {
  stønadskontoType: string;
  weeks: string;
  days: string;
  utbetalingsgrad: string;
};

export type UttakAktivitetType = {
  begrunnelse?: string;
  erOppfylt?: boolean;
  periodeAarsak: string;
  graderingInnvilget: boolean;
  graderingAvslagAarsak: string;
  samtidigUttaksprosent?: string;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  oppholdArsak: string;
  aktiviteter: UttakAktivitet[];
};
