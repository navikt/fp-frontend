import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR
  | AksjonspunktKode.OVERSTYR_ADOPSJONSVILKAR
  | AksjonspunktKode.OVERSTYR_FODSELSVILKAR
  | AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR
  | AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP
  | AksjonspunktKode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR
  | AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET
>;
