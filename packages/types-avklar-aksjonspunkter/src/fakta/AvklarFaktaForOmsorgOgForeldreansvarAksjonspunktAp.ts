import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  vilkarType: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OMSORGSOVERTAKELSE>;

export default AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;
