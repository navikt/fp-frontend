import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderSoknadsfristAp = AksjonspunktFraBackend<typeof AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST>;
