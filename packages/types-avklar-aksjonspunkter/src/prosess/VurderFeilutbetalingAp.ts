import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderFeilutbetalingAp = {
  videreBehandling: string;
  varseltekst?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_FEILUTBETALING>;

export default VurderFeilutbetalingAp;
