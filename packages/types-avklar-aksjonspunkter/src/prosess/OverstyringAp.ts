import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<'6006' | '6004' | '6003' | '6005' | '6010' | '6009' | '6011'>;
