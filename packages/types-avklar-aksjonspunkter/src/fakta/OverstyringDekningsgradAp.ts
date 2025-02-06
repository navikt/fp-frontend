import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringDekningsgradAp = {
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_DEKNINGSGRAD>;
