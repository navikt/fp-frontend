import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringDekningsgradAp = {
  dekningsgrad: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_DEKNINGSGRAD>;

export default OverstyringDekningsgradAp;
