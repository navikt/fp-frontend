import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Avslagsarsak } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderMedlemskapAp = {
  avslagskode?: Avslagsarsak;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>;
