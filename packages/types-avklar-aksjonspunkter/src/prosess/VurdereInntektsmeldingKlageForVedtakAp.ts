import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurdereInntektsmeldingKlageForVedtakAp = AksjonspunktTilBekreftelse<
  typeof AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK
>;
