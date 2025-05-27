import type { FordelingPeriodeKilde, OppholdArsakType, UtsettelseÅrsak, UttakPeriodeType } from '@navikt/fp-kodeverk';

import type { FaktaArbeidsforhold } from './faktaArbeidsforholdTsType';

export type KontrollerFaktaPeriode = Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>;
