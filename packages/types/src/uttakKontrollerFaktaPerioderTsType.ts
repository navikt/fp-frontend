export type UttakKontrollerFaktaPerioder = Readonly<{
  fom: string;
  tom: string;
  bekreftet: boolean;
  begrunnelse?: string;
  uttakPeriodeType: string;
  arbeidstidsprosent?: number;
  arbeidsgiverReferanse?: string;
  utsettelseÅrsak: string;
  overføringÅrsak: string;
  erSelvstendig: boolean;
  erFrilanser: boolean;
  flerbarnsdager: boolean;
  samtidigUttak: boolean;
  samtidigUttaksprosent?: string;
  oppholdÅrsak: string;
  erArbeidstaker: boolean;
  morsAktivitet: string;
  resultat: string;
}>

type UttakKontrollerFaktaPerioderWrapper = Readonly<{
  perioder: UttakKontrollerFaktaPerioder[];
}>

export default UttakKontrollerFaktaPerioderWrapper;
