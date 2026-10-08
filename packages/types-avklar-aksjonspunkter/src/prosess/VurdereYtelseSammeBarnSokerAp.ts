import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurdereYtelseSammeBarnSokerAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE
>;
