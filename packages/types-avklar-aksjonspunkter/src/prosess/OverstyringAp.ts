import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_SOKNADSFRISTVILKAR
  | AksjonspunktCode.OVERSTYR_ADOPSJONSVILKAR
  | AksjonspunktCode.OVERSTYR_FODSELSVILKAR
  | AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR
  | AksjonspunktCode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP
  | AksjonspunktCode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR
  | AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET>;

export default OverstyringAp;
