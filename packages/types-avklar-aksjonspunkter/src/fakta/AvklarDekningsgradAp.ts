import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarDekningsgradAp = {
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.AVKLAR_DEKNINGSGRAD>;
