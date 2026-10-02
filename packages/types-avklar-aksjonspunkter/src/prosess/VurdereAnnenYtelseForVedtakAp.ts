import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurdereAnnenYtelseForVedtakAp = AksjonspunktTilBekreftelse<
  typeof AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK
>;
