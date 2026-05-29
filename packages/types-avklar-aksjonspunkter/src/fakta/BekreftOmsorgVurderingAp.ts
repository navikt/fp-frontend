import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftOmsorgVurderingAp = AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LØPENDE_OMSORG>;
