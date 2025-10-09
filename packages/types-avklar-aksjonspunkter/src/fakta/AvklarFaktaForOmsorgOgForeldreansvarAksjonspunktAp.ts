import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { VilkårType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  vilkarType: VilkårType;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE>;
