import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageVurderingResultatAp = {
  klageVurdering: string;
  fritekstTilBrev?: string;
  klageAvvistArsak?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  vedtaksdatoPaklagdBehandling?: string;
  erGodkjentAvMedunderskriver?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.BEHANDLE_KLAGE_NFP | AksjonspunktKode.BEHANDLE_KLAGE_NK>;

export default KlageVurderingResultatAp;
