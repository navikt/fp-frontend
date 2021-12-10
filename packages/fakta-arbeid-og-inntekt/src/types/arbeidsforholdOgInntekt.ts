import { AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@fpsak-frontend/types';

type ArbeidsforholdOgInntekt = {
  arbeidsforhold: AoIArbeidsforhold | undefined;
  arbeidsforholdNavn: string | undefined;
  inntektsmelding: Inntektsmelding | undefined;
  inntektsposter: Inntektspost[] | undefined;
  nyttArbeidsforholdId?: number;
}

export default ArbeidsforholdOgInntekt;
