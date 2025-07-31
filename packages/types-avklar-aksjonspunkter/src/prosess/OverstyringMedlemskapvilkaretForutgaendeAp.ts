import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringMedlemskapvilkaretForutgaendeAp = {
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE>;
