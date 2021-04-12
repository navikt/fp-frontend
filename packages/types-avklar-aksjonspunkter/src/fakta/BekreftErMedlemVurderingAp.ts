import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import MedlemskapBekreftetPeriode from './MedlemskapBekreftetPeriode';

type BekreftErMedlemVurderingAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE>;

export default BekreftErMedlemVurderingAp;
