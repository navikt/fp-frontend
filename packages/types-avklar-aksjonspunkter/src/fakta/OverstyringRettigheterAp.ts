import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type Rettighetstype } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringRettigheterAp = {
  rettighetstype: Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>;
