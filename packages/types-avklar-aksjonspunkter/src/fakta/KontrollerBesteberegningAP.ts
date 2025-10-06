import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

// Oppstod for alle besteberegninger i en periode
export type KontrollerBesteberegningAP = {
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<'5048'>;

// Oppstår nå kun for besteberegninger med stort avvik mellom første og tredje ledd.
export type ManuellKontrollBesteberegningAP = {
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<'5062'>;

export type BesteberegningAP = ManuellKontrollBesteberegningAP | KontrollerBesteberegningAP;
