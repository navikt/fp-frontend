import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type AvklarDekningsgradAp = AksjonspunktFraBackend<typeof AksjonspunktKode.AVKLAR_DEKNINGSGRAD>;
