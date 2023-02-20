import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type Foreldreansvarsvilkar1Ap = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD>;

export default Foreldreansvarsvilkar1Ap;
