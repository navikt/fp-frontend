import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type ForeslaVedtakAp = AksjonspunktFraBackend<typeof AksjonspunktKode.FORESLÅ_VEDTAK>;
