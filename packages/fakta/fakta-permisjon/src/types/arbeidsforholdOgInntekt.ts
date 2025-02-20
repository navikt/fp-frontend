import type { AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@navikt/fp-types';

export type ArbeidsforholdOgInntekt = {
  arbeidsforhold: AoIArbeidsforhold;
  arbeidsgiverNavn: string;
  inntektsmelding: Inntektsmelding | undefined;
  inntektsposter: Inntektspost[] | undefined;
};
