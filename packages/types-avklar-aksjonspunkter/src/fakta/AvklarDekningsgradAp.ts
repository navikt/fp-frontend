import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type AvklarDekningsgradAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.AVKLAR_DEKNINGSGRAD>,
  'dekningsgrad'
>;
