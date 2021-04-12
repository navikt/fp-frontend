import { Kodeverk } from '@fpsak-frontend/types';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarVergeAp = {
  navn: string;
  fnr: string;
  gyldigFom: string;
  gyldigTom: string;
  vergeType: Kodeverk | string;
  organisasjonsnummer: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>;

export default AvklarVergeAp;
