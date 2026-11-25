import type { BeregningFaktaAP } from '@navikt/ft-fakta-beregning';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

type BeregningAksjonspunkt<K extends
  | typeof AksjonspunktKode.AVKLAR_AKTIVITETER
  | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
  | typeof AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
  | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG> = K extends unknown
  ? BeregningFaktaAP['grunnlag'][number] & AksjonspunktTilBekreftelse<K>
  : never;

export type BeregningAp = BeregningAksjonspunkt<
  | typeof AksjonspunktKode.AVKLAR_AKTIVITETER
  | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
  | typeof AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
  | typeof AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
>;
