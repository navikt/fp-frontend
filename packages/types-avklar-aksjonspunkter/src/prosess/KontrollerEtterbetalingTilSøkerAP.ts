import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerEtterbetalingTilSøkerAP =
  AksjonspunktTilBekreftelse<AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER>;

export default KontrollerEtterbetalingTilSøkerAP;
