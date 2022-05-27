import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarAnnenforelderHarRettAp = {
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenforelderMottarStønadEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT>

export default AvklarAnnenforelderHarRettAp;
