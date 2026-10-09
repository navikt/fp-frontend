import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type OverstyringSokersOpplysingspliktAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST>,
  'erVilkårOk'
>;
