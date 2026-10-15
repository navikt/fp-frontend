import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type KlageFormkravAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP>;
