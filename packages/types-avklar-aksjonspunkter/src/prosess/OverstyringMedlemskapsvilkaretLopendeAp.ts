import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringMedlemskapsvilkaretLopendeAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
  avslagDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR>;

export default OverstyringMedlemskapsvilkaretLopendeAp;
