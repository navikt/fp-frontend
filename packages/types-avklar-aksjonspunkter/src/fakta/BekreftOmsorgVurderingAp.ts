import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftOmsorgVurderingAp = {
  omsorg: boolean;
} & AksjonspunktTilBekreftelse<'5061'>;
