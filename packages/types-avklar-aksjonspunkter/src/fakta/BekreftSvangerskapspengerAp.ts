import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { BekreftTilrettelegging } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftSvangerskapspengerAp = {
  termindato: string;
  fødselsdato?: string;
  bekreftetSvpArbeidsforholdList: BekreftTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>;
