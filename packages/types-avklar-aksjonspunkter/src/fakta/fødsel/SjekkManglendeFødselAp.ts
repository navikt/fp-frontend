import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type SjekkManglendeFødselAp = {
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL>;
