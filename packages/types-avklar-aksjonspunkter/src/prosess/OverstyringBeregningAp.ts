import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringBeregningAp = {
  beregnetTilkjentYtelse: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_BEREGNING>;
