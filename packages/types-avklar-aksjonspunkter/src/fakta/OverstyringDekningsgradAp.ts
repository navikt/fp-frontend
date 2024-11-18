import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringDekningsgradAp = {
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_DEKNINGSGRAD>;

export default OverstyringDekningsgradAp;
