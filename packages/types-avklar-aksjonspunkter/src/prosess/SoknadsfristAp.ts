import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type SoknadsfristAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<'5007'>;
