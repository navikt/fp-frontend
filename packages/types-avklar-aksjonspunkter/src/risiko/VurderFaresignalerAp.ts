import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderFaresignalerAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering: string | Kodeverk;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>

export default VurderFaresignalerAp;
