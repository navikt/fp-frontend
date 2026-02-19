import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringMedlemskapsvilkaretLopendeAp = {
  erVilkårOk?: boolean;
  avslagskode?: string;
  avslagDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_6012>;
