import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderTilbaketrekkAp = {
  hindreTilbaketrekk?: boolean;
} & AksjonspunktTilBekreftelse<'5090'>;
