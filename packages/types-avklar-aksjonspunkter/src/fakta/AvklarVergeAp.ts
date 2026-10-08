import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { VergeType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarVergeAp = {
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
  organisasjonsnummer?: string;
  fnr?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.AVKLAR_VERGE>;
