import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type KlageVurderingResultatAp = AksjonspunktFraBackend<typeof AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP>;
