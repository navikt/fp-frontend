import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type SoknadsfristAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET>;
