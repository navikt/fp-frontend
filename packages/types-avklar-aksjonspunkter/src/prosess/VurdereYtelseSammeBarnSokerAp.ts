import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurdereYtelseSammeBarnSokerAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<'5031'>;
