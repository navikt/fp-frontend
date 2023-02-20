import { AksjonspunktCode, AksjonspunktCodeTilbakekreving } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type FatterVedtakAp = {
  aksjonspunktGodkjenningDtos: {
    godkjent: boolean;
    begrunnelse?: string;
    aksjonspunktKode?: string;
    arsaker: string[];
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FATTER_VEDTAK | AksjonspunktCodeTilbakekreving.FATTER_VEDTAK>;

export default FatterVedtakAp;
