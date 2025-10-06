import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringSokersOpplysingspliktAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<'6002'>;
