import type { DokumentasjonVurderingBehov } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderDokumentasjonAp = {
  vurderingBehov: DokumentasjonVurderingBehov[];
} & AksjonspunktTilBekreftelse<'5074'>;
