import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';

type OverstyringMedlemskapsvilkaretAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR>;

export default OverstyringMedlemskapsvilkaretAp;
