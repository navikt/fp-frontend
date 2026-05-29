import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type ForeslaVedtakAp = AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLÅ_VEDTAK>;
