import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type AvklarAnnenforelderHarRettAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT
>;
