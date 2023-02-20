import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftOmsorgVurderingAp = {
  omsorg: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG>;

export default BekreftOmsorgVurderingAp;
