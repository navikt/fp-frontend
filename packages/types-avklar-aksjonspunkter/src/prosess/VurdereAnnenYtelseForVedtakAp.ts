import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurdereAnnenYtelseForVedtakAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK
>;
