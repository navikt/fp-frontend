import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type SoknadsfristAp = AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET>;
