import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurdereYtelseSammeBarnSokerAp = {
  erVilkårOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE>;
