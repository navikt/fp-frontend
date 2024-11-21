import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VarselRevurderingAp = {
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: string;
} & AksjonspunktTilBekreftelse<
  AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL
>;

export default VarselRevurderingAp;
