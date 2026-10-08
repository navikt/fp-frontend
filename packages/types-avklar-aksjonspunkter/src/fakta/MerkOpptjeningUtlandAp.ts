import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { UtlandDokumentasjonStatus } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type MerkOpptjeningUtlandAp = {
  dokStatus?: UtlandDokumentasjonStatus;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>;
