import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VarselRevurderingAp = {
  sendVarsel?: boolean;
  frist?: string;
  ventearsak?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VARSEL_REVURDERING_MANUELL>;
