import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Avslagsarsak } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderForutgaendeMedlemskapAp = {
  avslagskode?: Avslagsarsak;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>;
