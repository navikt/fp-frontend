import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';

type OverstyringMedlemskapsvilkaretAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR>;

export default OverstyringMedlemskapsvilkaretAp;
