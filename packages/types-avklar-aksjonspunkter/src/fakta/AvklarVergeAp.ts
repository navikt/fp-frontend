import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { OneOf } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarVergeAp = {
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
} & OneOf<{ organisasjonsnummer: string }, { fnr: string }> &
  AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>;
