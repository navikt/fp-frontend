import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KontrollerFaktaPeriode } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftUttaksperioderAp = {
  perioder: KontrollerFaktaPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE
  | AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE
  | AksjonspunktKode.OVERSTYR_AVKLAR_FAKTA_UTTAK
>

export default BekreftUttaksperioderAp;
