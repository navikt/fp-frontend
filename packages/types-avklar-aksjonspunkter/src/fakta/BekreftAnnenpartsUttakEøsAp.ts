import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftAnnenpartsUttakEøsAp = {
  perioder: AnnenforelderUttakEøsPeriode[];
} & AksjonspunktTilBekreftelse<'5103' | '6103'>;
