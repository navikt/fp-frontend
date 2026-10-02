import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurdereDokumentForVedtakAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK>;
