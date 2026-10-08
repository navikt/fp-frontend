import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { VurderÅrsak } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type FatterVedtakAp = {
  aksjonspunktGodkjenningDtos: {
    godkjent: boolean;
    begrunnelse?: string;
    aksjonspunktKode?: string;
    arsaker: VurderÅrsak[];
  }[];
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.FATTER_VEDTAK | '5005'>;
