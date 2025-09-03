import type {
  foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidOgInntektsmeldingDto,
  foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto,
  foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto,
  foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto,
  foreldrepenger_domene_iay_modell_NaturalYtelse,
} from './apiDtoGenerert.ts';

export enum AksjonspunktÅrsak {
  MANGLENDE_INNTEKTSMELDING = 'MANGLENDE_INNTEKTSMELDING',
  INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD = 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD',
  PERMISJON_UTEN_SLUTTDATO = 'PERMISJON_UTEN_SLUTTDATO',
}

export type Inntektsmelding = foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto;

export type AktivNaturalYtelse = foreldrepenger_domene_iay_modell_NaturalYtelse;

export type Arbeidsforhold = foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto;

export type Inntektspost = foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto;

export type ArbeidOgInntektsmelding = foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidOgInntektsmeldingDto;
