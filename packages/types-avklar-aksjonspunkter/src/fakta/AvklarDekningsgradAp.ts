import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarDekningsgradAp = {
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>;

export default AvklarDekningsgradAp;
