import type { BekreftTilrettelegging } from '@navikt/fp-types';

export type TilretteleggingFormValues = {
  arbeidsforhold: Tilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};

export type Tilrettelegging = BekreftTilrettelegging & {
  skalVurdereSplittAvArbeidsforholdet: boolean;
  arbeidsforholdetErSplittet: boolean;
};
