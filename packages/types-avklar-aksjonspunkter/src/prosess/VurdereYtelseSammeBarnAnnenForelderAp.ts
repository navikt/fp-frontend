import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurdereYtelseSammeBarnAnnenForelderAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN>;

export default VurdereYtelseSammeBarnAnnenForelderAp;
