import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AksjonspunktCodeTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type FatterVedtakAp = {
  aksjonspunktGodkjenningDtos: {
    godkjent: boolean;
    begrunnelse?: string;
    aksjonspunktKode?: string;
    arsaker: Kodeverk[] | string[];
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FATTER_VEDTAK | AksjonspunktCodeTilbakekreving.FATTER_VEDTAK>;

export default FatterVedtakAp;
