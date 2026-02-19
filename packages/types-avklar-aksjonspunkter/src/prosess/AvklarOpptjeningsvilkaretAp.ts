import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarOpptjeningsvilkaretAp = {
  erVilkårOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET>;
