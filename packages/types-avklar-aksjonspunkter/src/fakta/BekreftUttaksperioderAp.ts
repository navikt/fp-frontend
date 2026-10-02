import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type BekreftUttaksperioderAp = AksjonspunktFraBackend<
  | typeof AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO
  | typeof AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER
  | typeof AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET
  | typeof AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG
  | typeof AksjonspunktKode.OVERSTYRING_FAKTA_UTTAK
>;
