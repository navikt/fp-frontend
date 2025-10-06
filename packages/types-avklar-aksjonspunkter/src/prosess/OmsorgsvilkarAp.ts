import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OmsorgsvilkarAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<'5011'>;
