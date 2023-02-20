import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type SoknadsfristAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.SOKNADSFRISTVILKARET>;

export default SoknadsfristAp;
