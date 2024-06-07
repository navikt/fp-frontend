import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarDekningsgradAp = {
  dekningsgrad: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_DEKNINGSGRAD>;

export default AvklarDekningsgradAp;
