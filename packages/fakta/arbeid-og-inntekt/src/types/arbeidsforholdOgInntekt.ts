import type { AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@navikt/fp-types';

export type Avklaring = {
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
};
type AGOpplysninger =
  | {
      erPrivatPerson: true;
      arbeidsgiverIdent: string;
      arbeidsgiverNavn: string;
      arbeidsgiverFødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      arbeidsgiverIdent: string;
      arbeidsgiverNavn: string;
    };

export type ArbeidsforholdOgInntektRadData = {
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger;
