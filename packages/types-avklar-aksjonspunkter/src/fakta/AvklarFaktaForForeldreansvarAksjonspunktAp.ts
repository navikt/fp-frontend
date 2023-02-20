import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarFaktaForForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_VILKAR_FOR_FORELDREANSVAR>;

export default AvklarFaktaForForeldreansvarAksjonspunktAp;
