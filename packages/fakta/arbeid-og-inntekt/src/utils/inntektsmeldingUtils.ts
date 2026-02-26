import type { Arbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

export const finnInntektsmeldingerForArbeidsgiver = (
  inntektsmeldinger: Inntektsmelding[],
  arbeidsgiverIdent: string,
): Inntektsmelding[] => {
  return inntektsmeldinger.filter(im => im.arbeidsgiverIdent === arbeidsgiverIdent);
};

export const grupperArbeidsforholdMedInntektsmelding = (
  inntektsmeldingerForArbeidsgiver: Inntektsmelding[],
  arbeidsforholdHosArbeidsgiver: Arbeidsforhold[],
): { arbeidsforhold: Arbeidsforhold; inntektsmelding: Inntektsmelding | undefined }[] => {
  return arbeidsforholdHosArbeidsgiver.map(arbeidsforhold => {
    const inntektsmelding = inntektsmeldingerForArbeidsgiver.find(im => erMatchendeArbeidsforhold(arbeidsforhold, im));
    return { arbeidsforhold, inntektsmelding };
  });
};

const erMatchendeArbeidsforhold = (arbeidsforhold: Arbeidsforhold, inntektsmelding: Inntektsmelding): boolean =>
  inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent &&
  (!inntektsmelding.internArbeidsforholdId ||
    inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);
