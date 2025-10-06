import type { PeriodeSoker } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type UttakAp = {
  perioder: PeriodeSoker[];
} & AksjonspunktTilBekreftelse<
  '5071' | '6008' | '5072' | '5069' | '5067' | '5073' | '5075' | '5076' | '5077' | '5078' | '5079'
>;
