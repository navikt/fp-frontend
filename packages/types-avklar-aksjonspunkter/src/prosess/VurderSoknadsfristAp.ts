import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderSoknadsfristAp = AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST>;
