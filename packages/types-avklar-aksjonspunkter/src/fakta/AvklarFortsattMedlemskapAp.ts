import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import MedlemskapBekreftetPeriode from './MedlemskapBekreftetPeriode';

type AvklarFortsattMedlemskapAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP>;

export default AvklarFortsattMedlemskapAp;
