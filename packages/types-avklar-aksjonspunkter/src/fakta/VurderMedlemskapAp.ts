import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderMedlemskapAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<'5101'>;
