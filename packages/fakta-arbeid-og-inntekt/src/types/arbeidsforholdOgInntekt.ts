import { AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@fpsak-frontend/types';

type ArbeidsforholdOgInntekt = {
  arbeidsforhold: AoIArbeidsforhold | undefined;
  arbeidsgiverNavn: string;
  inntektsmelding: Inntektsmelding | undefined;
  inntektsposter: Inntektspost[] | undefined;
}

export default ArbeidsforholdOgInntekt;
