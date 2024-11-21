import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftSvangerskapspengerAp = {
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FODSELTILRETTELEGGING>;

export default BekreftSvangerskapspengerAp;
