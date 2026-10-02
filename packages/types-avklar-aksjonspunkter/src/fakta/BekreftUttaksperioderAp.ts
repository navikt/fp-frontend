import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { FaktaUttakPeriode } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftUttaksperioderAp = {
  perioder: FaktaUttakPeriode[];
} & AksjonspunktTilBekreftelse<
  | typeof AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO
  | typeof AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER
  | typeof AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET
  | typeof AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG
  | typeof AksjonspunktKode.OVERSTYRING_FAKTA_UTTAK
>;
