import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { DokumentasjonVurderingBehov } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderDokumentasjonAp = {
  vurderingBehov: DokumentasjonVurderingBehov[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON>

export default VurderDokumentasjonAp;
