import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringMedlemskapvilkaretForutgaendeAp = {
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>;
