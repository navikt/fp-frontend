import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: fp-sak KlageFormkravAksjonspunktDto har erKlagerPart, erFristOverholdt, erKonkret og erSignert
// som primitive boolean uten @NotNull. Manglende verdi blir stille false. Fjern MedPåkravdeFelt når det er fikset.
export type KlageFormkravAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP>,
  'erKlagerPart' | 'erFristOverholdt' | 'erKonkret' | 'erSignert'
>;
