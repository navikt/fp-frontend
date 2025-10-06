import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftMannAdoptererAksjonspunktAp = {
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<'5006'>;
