import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringSokersOpplysingspliktAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_OVST>;

export default OverstyringSokersOpplysingspliktAp;
