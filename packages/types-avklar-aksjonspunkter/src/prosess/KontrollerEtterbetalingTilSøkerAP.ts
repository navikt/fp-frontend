import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type KontrollerEtterbetalingTilSøkerAP = AksjonspunktFraBackend<
  typeof AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER
>;
