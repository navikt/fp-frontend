import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringAvklarStartdatoForPeriodenAp = {
  startdatoFraSoknad: string;
  opprinneligDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO>;

export default OverstyringAvklarStartdatoForPeriodenAp;
