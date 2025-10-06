import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type FatterVedtakAp = {
  aksjonspunktGodkjenningDtos: {
    godkjent: boolean;
    begrunnelse?: string;
    aksjonspunktKode?: string;
    arsaker: string[];
  }[];
} & AksjonspunktTilBekreftelse<'5016' | '5005'>;
