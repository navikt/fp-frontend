import { Kodeverk } from '@fpsak-frontend/types';
import Permisjon from './permisjonTsType';

export type ArbeidsforholdTilretteleggingDato = Readonly<{
  fom: string;
  type: Kodeverk;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
}>

type ArbeidsforholdFodselOgTilrettelegging = Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  arbeidType: Kodeverk;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
}>

export default ArbeidsforholdFodselOgTilrettelegging;
