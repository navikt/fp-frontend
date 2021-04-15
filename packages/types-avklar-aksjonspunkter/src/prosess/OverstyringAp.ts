import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR
  | AksjonspunktKode.OVERSTYR_ADOPSJONSVILKAR
  | AksjonspunktKode.OVERSTYR_FODSELSVILKAR
  | AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR
  | AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP
  | AksjonspunktKode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR
  | AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET>;

export default OverstyringAp;
