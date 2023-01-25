import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurdereYtelseSammeBarnAnnenForelderAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN>;

export default VurdereYtelseSammeBarnAnnenForelderAp;
