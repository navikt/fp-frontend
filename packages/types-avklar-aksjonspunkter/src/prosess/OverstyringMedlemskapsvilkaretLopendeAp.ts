import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringMedlemskapsvilkaretLopendeAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
  avslagDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR>;

export default OverstyringMedlemskapsvilkaretLopendeAp;
