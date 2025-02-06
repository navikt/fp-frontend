import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringSokersOpplysingspliktAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_OVST>;
