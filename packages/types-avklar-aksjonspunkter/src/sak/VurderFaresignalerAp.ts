import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderFaresignalerAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_FARESIGNALER>;
