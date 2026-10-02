import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderOmsorgsovertakelseVilkåretAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET
>;
