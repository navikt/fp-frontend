import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarAnnenforelderHarRettAp = {
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<'5086'>;
