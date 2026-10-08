import type { BeregningFaktaAP } from '@navikt/ft-fakta-beregning';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BeregningAp = BeregningFaktaAP['grunnlag'][number] &
  AksjonspunktTilBekreftelse<
    | typeof AksjonspunktKode.AVKLAR_AKTIVITETER
    | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
    | typeof AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
    | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
  >;
