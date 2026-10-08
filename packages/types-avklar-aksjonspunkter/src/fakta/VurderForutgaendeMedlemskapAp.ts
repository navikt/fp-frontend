import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderForutgaendeMedlemskapAp = {
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>;
