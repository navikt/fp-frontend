import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringUtenlandssakMarkeringAp = {
  gammelVerdi: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE>;

export default OverstyringUtenlandssakMarkeringAp;
