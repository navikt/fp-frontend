import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringAvklarStartdatoForPeriodenAp = {
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO>;

export default OverstyringAvklarStartdatoForPeriodenAp;
