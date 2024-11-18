import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringAvklarStartdatoForPeriodenAp = {
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO>;

export default OverstyringAvklarStartdatoForPeriodenAp;
