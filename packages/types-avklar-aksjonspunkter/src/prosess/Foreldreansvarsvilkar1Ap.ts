import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type Foreldreansvarsvilkar1Ap = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<'5013'>;
