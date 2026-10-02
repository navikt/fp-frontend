import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderMedlemskapAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>;
