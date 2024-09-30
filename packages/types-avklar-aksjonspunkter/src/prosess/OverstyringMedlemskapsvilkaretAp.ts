import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';

type OverstyringMedlemskapsvilkaretAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR>;

export default OverstyringMedlemskapsvilkaretAp;
