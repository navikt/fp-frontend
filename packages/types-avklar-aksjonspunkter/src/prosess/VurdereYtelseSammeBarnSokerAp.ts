import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurdereYtelseSammeBarnSokerAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN>;

export default VurdereYtelseSammeBarnSokerAp;
