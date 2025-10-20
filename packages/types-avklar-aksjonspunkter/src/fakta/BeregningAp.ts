import type { BeregningFaktaAP } from '@navikt/ft-fakta-beregning';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BeregningAp = BeregningFaktaAP['grunnlag'][number] & {
  fakta: BeregningFaktaAP['grunnlag'][number]['fakta'];
  overstyrteAndeler?: BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler'];
} & AksjonspunktTilBekreftelse<
    | AksjonspunktKode.AVKLAR_AKTIVITETER
    | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
    | AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
    | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
  >;
