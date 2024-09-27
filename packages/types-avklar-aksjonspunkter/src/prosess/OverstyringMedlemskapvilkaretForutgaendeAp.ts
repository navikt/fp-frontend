import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';

type OverstyringMedlemskapsvilkaretForutgaendeAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE>;

export default OverstyringMedlemskapsvilkaretForutgaendeAp;
