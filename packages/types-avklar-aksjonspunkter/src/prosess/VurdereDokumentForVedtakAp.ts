import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurdereDokumentForVedtakAp = AksjonspunktTilBekreftelse<
  typeof AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK
>;
