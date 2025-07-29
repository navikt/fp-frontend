import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type SjekkManglendeFødselAp = {
  erBarnFødt: boolean;
  barn?: {
    fødselsdato: string;
    dødsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL>;
