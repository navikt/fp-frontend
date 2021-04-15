import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringBeregningAp = {
  beregnetTilkjentYtelse: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_BEREGNING>;

export default OverstyringBeregningAp;
