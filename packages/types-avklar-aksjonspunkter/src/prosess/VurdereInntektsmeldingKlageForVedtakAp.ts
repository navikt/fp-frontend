import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurdereInntektsmeldingKlageForVedtakAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK
>;
