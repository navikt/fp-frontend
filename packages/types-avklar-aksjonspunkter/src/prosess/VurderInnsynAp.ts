import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderInnsynAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_INNSYN>;
