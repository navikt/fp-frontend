import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

// Oppstod for alle besteberegninger i en periode
export type KontrollerBesteberegningAP = {
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING>;

// Oppstår nå kun for besteberegninger med stort avvik mellom første og tredje ledd.
export type ManuellKontrollBesteberegningAP = {
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>;

type BesteberegningAP = ManuellKontrollBesteberegningAP | KontrollerBesteberegningAP;

export default BesteberegningAP;
