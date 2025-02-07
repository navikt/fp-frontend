import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KontrollerEtterbetalingTilSøkerAP =
  AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER>;
