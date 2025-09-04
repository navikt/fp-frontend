import type {
  AoIArbeidsforhold,
  foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType,
  Inntektsmelding,
  Inntektspost,
} from '@navikt/fp-types';

export type Avklaring = {
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
};

export type AGOpplysninger =
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
