import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

// Oppstod for alle besteberegninger i en periode
export type KontrollerBesteberegningAP = {
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5048>;

// Oppstår nå kun for besteberegninger med stort avvik mellom første og tredje ledd.
export type ManuellKontrollBesteberegningAP = {
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>;

export type BesteberegningAP = ManuellKontrollBesteberegningAP | KontrollerBesteberegningAP;
