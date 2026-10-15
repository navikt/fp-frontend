import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type AvklarOpptjeningsvilkaretAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET>;
