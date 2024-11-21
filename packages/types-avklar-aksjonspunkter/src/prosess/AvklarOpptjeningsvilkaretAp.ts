import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarOpptjeningsvilkaretAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OPPTJENINGSVILKARET>;

export default AvklarOpptjeningsvilkaretAp;
