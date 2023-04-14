import { AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@navikt/fp-types';

type ArbeidsforholdOgInntekt = {
  arbeidsforhold: AoIArbeidsforhold;
  arbeidsgiverNavn: string;
  inntektsmelding: Inntektsmelding | undefined;
  inntektsposter: Inntektspost[] | undefined;
};

export default ArbeidsforholdOgInntekt;
