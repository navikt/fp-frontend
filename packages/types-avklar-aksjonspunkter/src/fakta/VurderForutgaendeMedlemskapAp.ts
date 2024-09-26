import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';

type VurderForutgaendeMedlemskapAp = {
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>;

export default VurderForutgaendeMedlemskapAp;
