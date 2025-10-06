import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarVergeAp = {
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer?: string;
  fnr?: string;
} & AksjonspunktTilBekreftelse<'5030'>;
