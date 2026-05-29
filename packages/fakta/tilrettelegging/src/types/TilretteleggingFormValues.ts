import type { SvpArbeidsforholdDto } from '@navikt/fp-types';

export type TilretteleggingFormValues = {
  arbeidsforhold: SvpArbeidsforholdDto[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};
