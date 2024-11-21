import { FaktaArbeidsforhold } from './faktaArbeidsforholdTsType';

export type KontrollerFaktaPeriode = Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: string;
  utsettelseÅrsak?: string;
  overføringÅrsak?: string;
  oppholdÅrsak?: string;
  arbeidstidsprosent?: number;
  arbeidsforhold?: FaktaArbeidsforhold;
  samtidigUttaksprosent?: number;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  periodeKilde: string;
  begrunnelse?: string;
}>;
