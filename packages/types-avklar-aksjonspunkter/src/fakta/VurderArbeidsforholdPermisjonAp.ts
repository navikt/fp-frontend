import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderArbeidsforholdPermisjonAp = {
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_ARBEIDSFORHOLD_PERMISJON>;

export default VurderArbeidsforholdPermisjonAp;
