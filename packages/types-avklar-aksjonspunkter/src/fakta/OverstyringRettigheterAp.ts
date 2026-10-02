import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type OverstyringRettigheterAp = AksjonspunktFraBackend<typeof AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>;
