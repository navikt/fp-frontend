import type { KontrollerFaktaPeriode } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftUttaksperioderAp = {
  perioder: KontrollerFaktaPeriode[];
} & AksjonspunktTilBekreftelse<'5065' | '5064' | '5063' | '5066' | '6065'>;
