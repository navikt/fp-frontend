import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftOmsorgVurderingAp = {
  omsorg: boolean;
  ikkeOmsorgPerioder: {
    periodeFom: string;
    periodeTom: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG>;

export default BekreftOmsorgVurderingAp;
