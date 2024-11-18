import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerEtterbetalingTilSøkerAP =
  AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER>;

export default KontrollerEtterbetalingTilSøkerAP;
