import type {
  FordelBeregningsgrunnlagAP,
  VurderRefusjonBeregningsgrunnlagAP,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type FordelBeregningAp =
  | (FordelBeregningsgrunnlagAP['grunnlag'][number] &
      AksjonspunktTilBekreftelse<typeof AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG>)
  | (VurderRefusjonBeregningsgrunnlagAP['grunnlag'][number] &
      AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_REFUSJON_BERGRUNN>);
