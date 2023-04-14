import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { KontrollerFaktaPeriode } from '@navikt/fp-types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftUttaksperioderAp = {
  perioder: KontrollerFaktaPeriode[];
} & AksjonspunktTilBekreftelse<
  | AksjonspunktCode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE
  | AksjonspunktCode.FAKTA_UTTAK_INGEN_PERIODER_KODE
  | AksjonspunktCode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE
  | AksjonspunktCode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE
  | AksjonspunktCode.OVERSTYR_FAKTA_UTTAK
>;

export default BekreftUttaksperioderAp;
