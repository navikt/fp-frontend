import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftEktefelleAksjonspunktAp = {
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<'5005'>;
