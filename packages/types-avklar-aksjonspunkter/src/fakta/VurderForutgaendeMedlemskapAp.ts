import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderForutgaendeMedlemskapAp = {
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<'5102'>;
