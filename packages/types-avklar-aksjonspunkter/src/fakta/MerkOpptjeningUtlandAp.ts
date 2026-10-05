import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type MerkOpptjeningUtlandAp = {
  dokStatus?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>;
