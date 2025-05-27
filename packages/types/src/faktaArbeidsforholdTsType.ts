import type { UttakArbeidType } from '@navikt/fp-kodeverk';

export type FaktaArbeidsforhold = Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>;
