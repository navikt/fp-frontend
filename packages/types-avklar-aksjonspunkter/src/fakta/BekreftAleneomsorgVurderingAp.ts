import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftAleneomsorgVurderingAp = {
  aleneomsorg: boolean;
  annenforelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<'5060'>;
