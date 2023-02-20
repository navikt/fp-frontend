import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VarselRevurderingAp = {
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktCode.VARSEL_REVURDERING_MANUELL>;

export default VarselRevurderingAp;
