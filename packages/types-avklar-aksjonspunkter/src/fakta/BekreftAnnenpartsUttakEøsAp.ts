import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftAnnenpartsUttakEøsAp = {
  perioder: AnnenforelderUttakEøsPeriode[];
} & AksjonspunktTilBekreftelse<
  AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART | AksjonspunktKode.OVERSTYR_FAKTA_UTTAK_EØS
>;
