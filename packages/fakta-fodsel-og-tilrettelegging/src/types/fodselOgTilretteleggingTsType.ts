import ArbeidsforholdFodselOgTilrettelegging from './arbeidsforholdFodselOgTilretteleggingTsType';

type FodselOgTilrettelegging = Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>

export default FodselOgTilrettelegging;
