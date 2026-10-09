import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../../AksjonspunktFraBackend';

export type SjekkManglendeFødselAp = AksjonspunktFraBackend<typeof AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL>;
