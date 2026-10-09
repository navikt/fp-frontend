import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VarselRevurderingAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VARSEL_REVURDERING_MANUELL>;
