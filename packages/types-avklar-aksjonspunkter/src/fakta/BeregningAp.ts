import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BeregningAp = AksjonspunktTilBekreftelse<
  | AksjonspunktKode.AVKLAR_AKTIVITETER
  | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
  | AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
  | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
>;
