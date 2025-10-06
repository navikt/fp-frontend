import type { TilbakekrevingVidereBehandling } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderFeilutbetalingAp = {
  videreBehandling: TilbakekrevingVidereBehandling;
  varseltekst?: string;
} & AksjonspunktTilBekreftelse<'5084'>;
