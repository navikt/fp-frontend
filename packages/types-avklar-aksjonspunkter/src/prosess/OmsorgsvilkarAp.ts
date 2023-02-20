import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OmsorgsvilkarAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_VURDERING_AV_OMSORGSVILKARET>;

export default OmsorgsvilkarAp;
