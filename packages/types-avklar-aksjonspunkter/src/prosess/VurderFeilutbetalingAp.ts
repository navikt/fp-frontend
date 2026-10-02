import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { TilbakekrevingVidereBehandling } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderFeilutbetalingAp = {
  videreBehandling: TilbakekrevingVidereBehandling;
  varseltekst?: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_FEILUTBETALING>;
