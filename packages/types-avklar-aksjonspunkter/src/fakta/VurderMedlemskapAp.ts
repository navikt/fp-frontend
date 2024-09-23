import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';

type VurderMedlemskapAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET>;

export default VurderMedlemskapAp;
