import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftUttaksperioderAp = AksjonspunktTilBekreftelse<
  | AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO
  | AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG
  | AksjonspunktKode.OVERSTYRING_FAKTA_UTTAK
>;
