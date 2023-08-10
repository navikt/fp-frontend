import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftSvangerskapspengerAp = {
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FODSELTILRETTELEGGING>;

export default BekreftSvangerskapspengerAp;
