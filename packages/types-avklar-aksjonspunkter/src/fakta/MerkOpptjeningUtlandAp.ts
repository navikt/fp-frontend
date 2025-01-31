import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type MerkOpptjeningUtlandAp = {
  dokStatus?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>;

export default MerkOpptjeningUtlandAp;
