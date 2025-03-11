import type { FaktaArbeidsforhold } from './faktaArbeidsforholdTsType';

export type KontrollerFaktaPeriode = Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: string | null;
  utsettelseÅrsak?: string | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: string | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: string;
  begrunnelse?: string | null;
}>;
