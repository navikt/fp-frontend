import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftMannAdoptererAksjonspunktAp = {
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE>;

export default BekreftMannAdoptererAksjonspunktAp;
