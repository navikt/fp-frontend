import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type AvklarVergeAp = AksjonspunktFraBackend<typeof AksjonspunktKode.AVKLAR_VERGE>;
