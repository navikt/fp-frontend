import { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

type TilretteleggingFormValues = {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};

export default TilretteleggingFormValues;
