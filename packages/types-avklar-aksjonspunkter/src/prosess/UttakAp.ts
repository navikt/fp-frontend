import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { PeriodeSoker } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type UttakAp = {
  perioder: PeriodeSoker[];
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.FASTSETT_UTTAKPERIODER
  | AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
  | AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT
  | AksjonspunktKode.UTGÅTT_5069
  | AksjonspunktKode.UTGÅTT_5067
  | AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
  | AksjonspunktKode.UTGÅTT_5075
  | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD
  | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
  | AksjonspunktKode.UTGÅTT_5078
  | AksjonspunktKode.UTGÅTT_5079
>;
