import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type Foreldreansvarsvilkar2Ap = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD>;

export default Foreldreansvarsvilkar2Ap;
