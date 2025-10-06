import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VarselRevurderingAp = {
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: string;
} & AksjonspunktTilBekreftelse<'5025' | '5026'>;
