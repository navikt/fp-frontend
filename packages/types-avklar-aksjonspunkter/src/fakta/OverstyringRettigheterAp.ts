import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringRettigheterAp = {
  rettighetstype: foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>;
