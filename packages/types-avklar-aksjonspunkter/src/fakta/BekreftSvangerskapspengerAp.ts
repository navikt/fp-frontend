import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type BekreftSvangerskapspengerAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>;
