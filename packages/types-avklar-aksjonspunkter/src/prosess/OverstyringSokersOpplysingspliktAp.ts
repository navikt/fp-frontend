import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: fp-sak OverstyringSokersOpplysingspliktDto har erVilkårOk som primitiv boolean uten @NotNull.
// Manglende verdi blir stille false (avslag). Fjern MedPåkravdeFelt når det er fikset.
export type OverstyringSokersOpplysingspliktAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST>,
  'erVilkårOk'
>;
