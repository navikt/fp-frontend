import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { UttakResultatPeriodeLagreDto } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type UttakAp = {
  perioder: UttakResultatPeriodeLagreDto[];
} & AksjonspunktTilBekreftelse<
  | typeof AksjonspunktKode.FASTSETT_UTTAKPERIODER
  | typeof AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
  | typeof AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT
  | typeof AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
  | typeof AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD
  | typeof AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
>;
