import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringBeregningAp = {
  beregnetTilkjentYtelse: number;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_BEREGNING>;

export default OverstyringBeregningAp;
