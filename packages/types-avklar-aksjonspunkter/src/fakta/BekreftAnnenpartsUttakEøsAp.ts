import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftAnnenpartsUttakEøsAp = AksjonspunktTilBekreftelse<
  AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART | AksjonspunktKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART
>;
