import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type SjekkManglendeFødselAp = AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL>;
