import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type BekreftAnnenpartsUttakEøsAp = AksjonspunktFraBackend<
  | typeof AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART
  | typeof AksjonspunktKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART
>;
