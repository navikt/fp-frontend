import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type ForeslaVedtakManueltAp = {
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<'5028'>;
