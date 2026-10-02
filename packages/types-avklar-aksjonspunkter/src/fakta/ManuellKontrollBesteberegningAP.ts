import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type ManuellKontrollBesteberegningAP = AksjonspunktFraBackend<
  typeof AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING
>;
