import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type KlageFormkravAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP>,
  'erKlagerPart' | 'erFristOverholdt' | 'erKonkret' | 'erSignert'
>;
