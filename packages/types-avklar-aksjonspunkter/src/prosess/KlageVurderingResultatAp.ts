import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageVurderingResultatAp = {
  klageVurdering: Kodeverk | string;
  fritekstTilBrev?: string;
  klageAvvistArsak?: Kodeverk | string;
  klageMedholdArsak?: Kodeverk | string;
  klageVurderingOmgjoer?: Kodeverk | string;
  vedtaksdatoPaklagdBehandling?: string;
  erGodkjentAvMedunderskriver?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.BEHANDLE_KLAGE_NFP | AksjonspunktKode.BEHANDLE_KLAGE_NK>;

export default KlageVurderingResultatAp;
