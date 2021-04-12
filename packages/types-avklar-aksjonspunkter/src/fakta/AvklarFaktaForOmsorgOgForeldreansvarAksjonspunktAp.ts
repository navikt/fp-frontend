import { Kodeverk } from '@fpsak-frontend/types';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  vilkarType: Kodeverk | string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OMSORGSOVERTAKELSE>;

export default AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;
