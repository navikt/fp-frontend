import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderArbeidsforholdPermisjonAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO
>;
