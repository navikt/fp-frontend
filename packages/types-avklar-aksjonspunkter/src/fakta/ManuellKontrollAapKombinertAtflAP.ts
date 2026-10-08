import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type ManuellKontrollAapKombinertAtflAP = AksjonspunktFraBackend<
  typeof AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL
>;
