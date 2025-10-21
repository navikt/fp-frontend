import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftSvangerskapspengerAp = {
  termindato: string;
  fødselsdato?: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>;
