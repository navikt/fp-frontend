import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderTilbaketrekkAp = {
  hindreTilbaketrekk?: boolean;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.UTGÅTT_5090>;
