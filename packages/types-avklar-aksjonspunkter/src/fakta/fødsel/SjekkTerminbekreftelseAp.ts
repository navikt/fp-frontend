import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../../AksjonspunktFraBackend';

export type SjekkTerminbekreftelseAp = AksjonspunktFraBackend<typeof AksjonspunktKode.SJEKK_TERMINBEKREFTELSE>;
