import { Kodeverk } from '@fpsak-frontend/types';
import AksjonspunktKodeTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';

import AksjonspunktTilBekreftelse from '../../AksjonspunktTilBekreftelse';

type AvklartFaktaFeilutbetalingAp = {
  feilutbetalingFakta: {
    fom: string;
    tom: string;
    årsak: {
      hendelseType: Kodeverk;
      hendelseUndertype: Kodeverk;
    }
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKodeTilbakekreving.AVKLAR_FAKTA_FOR_FEILUTBETALING>;

export default AvklartFaktaFeilutbetalingAp;
