export type UttakAktivitet = {
  stønadskontoType: string;
  weeks: number;
  days: number;
  utbetalingsgrad: number;
}

export type UttakAktivitetType = {
  begrunnelse: string;
  erOppfylt: boolean;
  periodeAarsak: string;
  graderingInnvilget: boolean;
  graderingAvslagAarsak: string;
  samtidigUttaksprosent?: number;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  oppholdArsak: string;
  aktiviteter: UttakAktivitet[];
};
