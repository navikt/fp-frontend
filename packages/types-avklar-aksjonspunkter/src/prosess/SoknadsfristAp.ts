import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type SoknadsfristAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SOKNADSFRISTVILKARET>;

export default SoknadsfristAp;
