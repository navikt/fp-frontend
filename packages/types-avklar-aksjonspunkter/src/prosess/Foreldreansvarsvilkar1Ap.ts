import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type Foreldreansvarsvilkar1Ap = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5013>;
