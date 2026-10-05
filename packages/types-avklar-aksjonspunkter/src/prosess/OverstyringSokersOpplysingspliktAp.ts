import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringSokersOpplysingspliktAp = {
  erVilkårOk: boolean;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST>;
