import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VarselRevurderingAp = AksjonspunktTilBekreftelse<AksjonspunktKode.VARSEL_REVURDERING_MANUELL>;
