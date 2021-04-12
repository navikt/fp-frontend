import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringAvklarStartdatoForPeriodenAp = {
  startdatoFraSoknad: string;
  opprinneligDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO>;

export default OverstyringAvklarStartdatoForPeriodenAp;
