import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type Foreldreansvarsvilkar2Ap = {
  erVilkårOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.UTGÅTT_5014>;
