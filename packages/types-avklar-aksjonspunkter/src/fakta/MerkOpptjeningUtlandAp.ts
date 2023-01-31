import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type MerkOpptjeningUtlandAp = {
  dokStatus?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>;

export default MerkOpptjeningUtlandAp;
