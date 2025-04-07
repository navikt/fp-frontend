import type { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

export type TilretteleggingFormValues = {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};
