import type { Arbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

import type { Avklaring } from '../types/arbeidsforholdOgInntekt';

export const lagAvklaringFraArbeidsforhold = (
  arbeidsforhold: Arbeidsforhold,
  arbeidsgiverNavn: string,
): Avklaring | undefined => {
  const { fom, tom, saksbehandlersVurdering, stillingsprosent, begrunnelse } = arbeidsforhold;
  if (!arbeidsforhold.saksbehandlersVurdering) {
    return undefined;
  }
  if (
    arbeidsforhold.saksbehandlersVurdering === 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER' ||
    arbeidsforhold.saksbehandlersVurdering === 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
  ) {
    return {
      arbeidsgiverNavn,
      fom,
      tom,
      stillingsprosent,
      saksbehandlersVurdering: saksbehandlersVurdering ?? undefined,
      begrunnelse: begrunnelse ?? undefined,
    };
  }
  return {
    saksbehandlersVurdering: saksbehandlersVurdering ?? undefined,
    begrunnelse: begrunnelse ?? undefined,
  };
};
export const lagAvklaringFraInntektsmelding = ({
  saksbehandlersVurdering,
  begrunnelse,
}: Inntektsmelding): Avklaring | undefined => {
  return saksbehandlersVurdering
    ? {
        saksbehandlersVurdering,
        begrunnelse: begrunnelse ?? undefined,
      }
    : undefined;
};
