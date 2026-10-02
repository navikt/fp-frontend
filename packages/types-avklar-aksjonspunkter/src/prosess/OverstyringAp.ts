import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringAp = {
  erVilkårOk?: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<
  | typeof AksjonspunktKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET
  | typeof AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET
  | typeof AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET
  | typeof AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR
  | typeof AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET
>;
