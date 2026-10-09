import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: fp-sak AvklarOpptjeningsvilkåretDto har erVilkårOk som primitiv boolean uten @NotNull.
// Manglende verdi blir stille false (avslag). Fjern MedPåkravdeFelt når det er fikset.
export type AvklarOpptjeningsvilkaretAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET>,
  'erVilkårOk'
>;
