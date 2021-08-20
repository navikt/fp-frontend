import { Kodeverk } from '@fpsak-frontend/types';

export type Permisjon = Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig: boolean;
  type: Kodeverk;
}>

export type ArbeidsforholdTilretteleggingDato = Readonly<{
  fom: string;
  type: Kodeverk;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
}>

export type ArbeidsforholdFodselOgTilrettelegging = Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: Kodeverk;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
}>

type FodselOgTilrettelegging = Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>

export default FodselOgTilrettelegging;
