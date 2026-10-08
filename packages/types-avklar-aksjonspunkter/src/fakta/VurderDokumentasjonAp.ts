import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderDokumentasjonAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON>;
