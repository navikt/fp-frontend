import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type OverstyringAvklarStartdatoForPeriodenAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO
>;
