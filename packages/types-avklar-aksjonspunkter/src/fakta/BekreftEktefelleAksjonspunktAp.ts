import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftEktefelleAksjonspunktAp = {
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN>;
