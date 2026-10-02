import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type OverstyringMedlemskapsvilkaretAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET
>;
