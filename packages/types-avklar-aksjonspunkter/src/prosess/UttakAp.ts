<<<<<<< HEAD
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { UttakResultatPeriodeLagreDto } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type UttakAp = {
  perioder: UttakResultatPeriodeLagreDto[];
} & AksjonspunktTilBekreftelse<
=======
import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type UttakAp = AksjonspunktTilBekreftelse<
>>>>>>> b82cb0267 (refactor: erstatt manuelle aksjonspunkt-typer med genererte DTO-er)
  | AksjonspunktKode.FASTSETT_UTTAKPERIODER
  | AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
  | AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT
  | AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
  | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD
  | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
>;
