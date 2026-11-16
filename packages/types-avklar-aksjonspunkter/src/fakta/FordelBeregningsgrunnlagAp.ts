import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type FordelBeregningsgrunnlagAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG | typeof AksjonspunktKode.VURDER_REFUSJON_BERGRUNN
>;
