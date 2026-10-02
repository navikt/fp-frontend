import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringDekningsgradAp = {
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD>;
