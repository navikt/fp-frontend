import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type OverstyringSokersOpplysingspliktAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST
>;
