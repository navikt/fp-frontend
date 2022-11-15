type KontrollerFaktaPeriode = Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType: string;
  utsettelseÅrsak: string;
  overføringÅrsak: string;
  oppholdÅrsak: string;
  arbeidstidsprosent?: number;
  arbeidsforhold: any;
  samtidigUttaksprosent?: string;
  flerbarnsdager: boolean;
  morsAktivitet: string;
  periodeKilde: string;
}>

export default KontrollerFaktaPeriode;
