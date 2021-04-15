import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderFeilutbetalingAp = {
  videreBehandling: Kodeverk | string;
  varseltekst?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FEILUTBETALING>;

export default VurderFeilutbetalingAp;
