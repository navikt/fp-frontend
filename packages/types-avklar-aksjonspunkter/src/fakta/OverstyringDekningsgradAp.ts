import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringDekningsgradAp = {
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<'6016'>;
