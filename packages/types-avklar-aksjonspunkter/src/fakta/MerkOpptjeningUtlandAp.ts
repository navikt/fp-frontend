import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type MerkOpptjeningUtlandAp = {
  dokStatus?: string;
} & AksjonspunktTilBekreftelse<'5068'>;
