import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerEtterbetalingTilSøkerAp =
  AksjonspunktTilBekreftelse<AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER>;

export default KontrollerEtterbetalingTilSøkerAp;
