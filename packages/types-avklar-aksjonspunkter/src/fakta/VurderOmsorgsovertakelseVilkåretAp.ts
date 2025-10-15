import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Avslagsarsak, OmsorgsovertakelseVilkårType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderOmsorgsovertakelseVilkåretAp = {
  avslagskode?: Avslagsarsak;
  delvilkår: OmsorgsovertakelseVilkårType;
  omsorgsovertakelseDato: string;
  fødselsdatoer: { fødselsdato: string; barnNummer: number }[];
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET>;
