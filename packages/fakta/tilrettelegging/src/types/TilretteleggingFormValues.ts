import type { BekreftTilrettelegging } from '@navikt/fp-types';

export type TilretteleggingFormValues = {
  arbeidsforhold: BekreftTilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};
