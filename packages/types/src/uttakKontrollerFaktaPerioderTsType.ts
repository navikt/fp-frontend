import Kodeverk from './kodeverkTsType';

export type UttakKontrollerFaktaPerioder = Readonly<{
  fom: string;
  tom: string;
  bekreftet: boolean;
  begrunnelse?: string;
  uttakPeriodeType: Kodeverk;
  arbeidstidsprosent?: number;
  arbeidsgiverReferanse?: string;
  utsettelseÅrsak: Kodeverk;
  overføringÅrsak: Kodeverk;
  erSelvstendig: boolean;
  erFrilanser: boolean;
  flerbarnsdager: boolean;
  samtidigUttak: boolean;
  samtidigUttaksprosent?: string;
  oppholdÅrsak: Kodeverk;
  erArbeidstaker: boolean;
  morsAktivitet: Kodeverk;
  resultat: Kodeverk;
}>

type UttakKontrollerFaktaPerioderWrapper = Readonly<{
  perioder: UttakKontrollerFaktaPerioder[];
}>

export default UttakKontrollerFaktaPerioderWrapper;
