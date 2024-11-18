import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { DokumentasjonVurderingBehov } from '@navikt/fp-types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderDokumentasjonAp = {
  vurderingBehov: DokumentasjonVurderingBehov[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON>;

export default VurderDokumentasjonAp;
