import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';

type OverstyringMedlemskapsvilkaretForutgaendeAp = {
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE>;

export default OverstyringMedlemskapsvilkaretForutgaendeAp;
