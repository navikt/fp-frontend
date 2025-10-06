import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarDekningsgradAp = {
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<'5002'>;
