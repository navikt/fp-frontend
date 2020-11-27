import { Arbeidsforhold } from '@fpsak-frontend/types';

type CustomArbeidsforhold = Arbeidsforhold & {
  replaceOptions?: Arbeidsforhold[];
  originalFomDato?: string;
  overstyrtTom?: string;
  navn?: string;
  arbeidsforholdHandlingField?: string;
  aktivtArbeidsforholdHandlingField?: string;
}

export default CustomArbeidsforhold;
