import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KlageVurderingResultatAp = AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP>;
