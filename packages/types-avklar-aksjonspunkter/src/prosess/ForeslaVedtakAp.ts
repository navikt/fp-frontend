import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type ForeslaVedtakAp = {
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLA_VEDTAK>;

export default ForeslaVedtakAp;
