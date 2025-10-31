import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET
  | AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET
  | AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET
  | AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR
  | AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET
>;
