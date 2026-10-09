import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type AvklarOpptjeningsvilkaretAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET>,
  'erVilkårOk'
>;
