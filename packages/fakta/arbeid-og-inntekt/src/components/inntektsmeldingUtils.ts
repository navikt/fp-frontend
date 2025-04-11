import type { AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

export const finnInntektsmeldingerForArbeidsgiver = (
  inntektsmeldinger: Inntektsmelding[],
  arbeidsgiverIdent: string,
): Inntektsmelding[] => {
  return inntektsmeldinger.filter(im => im.arbeidsgiverIdent === arbeidsgiverIdent);
};

export const grupperArbeidsforholdMedInntektsmelding = (
  inntektsmeldingerForArbeidsgiver: Inntektsmelding[],
  arbeidsforholdHosArbeidsgiver: AoIArbeidsforhold[],
): { arbeidsforhold: AoIArbeidsforhold; inntektsmelding: Inntektsmelding | undefined }[] => {
  return arbeidsforholdHosArbeidsgiver.map(arbeidsforhold => {
    const inntektsmelding = inntektsmeldingerForArbeidsgiver.find(im => erMatch(arbeidsforhold, im));
    return { arbeidsforhold, inntektsmelding };
  });
};

export const erMatch = (arbeidsforhold: AoIArbeidsforhold, inntektsmelding: Inntektsmelding): boolean =>
  inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent &&
  (!inntektsmelding.internArbeidsforholdId ||
    inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);
