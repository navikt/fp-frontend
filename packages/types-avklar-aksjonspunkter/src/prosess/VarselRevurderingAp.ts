import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VarselRevurderingAp = {
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: Kodeverk | string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL>;

export default VarselRevurderingAp;
