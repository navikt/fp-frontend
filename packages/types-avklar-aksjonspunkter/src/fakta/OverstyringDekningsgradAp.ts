import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: fp-sak AvklarDekningsgradOverstyringDto har dekningsgrad som primitiv int uten @NotNull, så OpenAPI viser
// feltet som valgfritt. Manglende verdi blir 0 og avvises av @Min(80). Fjern MedPåkravdeFelt når det er fikset.
export type OverstyringDekningsgradAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD>,
  'dekningsgrad'
>;
