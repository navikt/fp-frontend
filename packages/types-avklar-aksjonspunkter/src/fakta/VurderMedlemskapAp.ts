import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';

type VurderMedlemskapAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>;

export default VurderMedlemskapAp;
