import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type ForeslaVedtakManueltAp = AksjonspunktFraBackend<typeof AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT>;
