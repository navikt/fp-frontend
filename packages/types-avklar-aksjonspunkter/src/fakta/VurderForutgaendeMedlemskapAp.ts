import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderForutgaendeMedlemskapAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR
>;
