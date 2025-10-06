import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type ForeslaVedtakAp = {
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<'5015'>;
