import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderFeilutbetalingAp = AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FEILUTBETALING>;
