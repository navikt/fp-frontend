import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type BeregningAp = AksjonspunktFraBackend<
  | typeof AksjonspunktKode.AVKLAR_AKTIVITETER
  | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
  | typeof AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
  | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
>;
