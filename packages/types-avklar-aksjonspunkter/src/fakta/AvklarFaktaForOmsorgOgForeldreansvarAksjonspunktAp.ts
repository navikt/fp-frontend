import type { VilkårType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  vilkarType: VilkårType;
} & AksjonspunktTilBekreftelse<'5008'>;
