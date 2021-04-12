import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarStartdatoForPeriodenAp = {
  startdatoFraSoknad: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN>;

export default AvklarStartdatoForPeriodenAp;
