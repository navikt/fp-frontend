import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type MerkOpptjeningUtlandAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK
>;
