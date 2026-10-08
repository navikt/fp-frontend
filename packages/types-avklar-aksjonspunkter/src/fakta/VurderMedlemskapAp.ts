import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderMedlemskapAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>;
