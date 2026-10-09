import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type OverstyringDekningsgradAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD>,
  'dekningsgrad'
>;
