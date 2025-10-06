import { type Rettighetstype } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringRettigheterAp = {
  rettighetstype: Rettighetstype;
} & AksjonspunktTilBekreftelse<'6018'>;
