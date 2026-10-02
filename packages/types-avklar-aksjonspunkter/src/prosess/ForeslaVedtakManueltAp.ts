import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type ForeslaVedtakManueltAp = {
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT>;
