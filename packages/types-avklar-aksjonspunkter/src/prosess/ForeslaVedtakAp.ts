import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type ForeslaVedtakAp = {
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.FORESLÅ_VEDTAK>;
