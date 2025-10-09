import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftOmsorgVurderingAp = {
  omsorg: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LØPENDE_OMSORG>;
