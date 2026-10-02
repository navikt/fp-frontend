import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KontrollAvManueltOpprettetRevurderingsbehandlingAp = AksjonspunktTilBekreftelse<
  typeof AksjonspunktKode.UTGÅTT_5056
>;
