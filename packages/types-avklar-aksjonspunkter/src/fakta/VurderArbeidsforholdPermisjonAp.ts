import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderArbeidsforholdPermisjonAp = {
  arbeidsforhold: {
    internArbeidsforholdId: string;
    permisjonStatus: string;
    begrunnelse: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON_KODE>

export default VurderArbeidsforholdPermisjonAp;
