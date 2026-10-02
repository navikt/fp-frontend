import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderFeilutbetalingAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_FEILUTBETALING>;
