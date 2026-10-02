import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type ManuellKontrollAapKombinertAtflAP = AksjonspunktTilBekreftelse<
  typeof AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL
>;
