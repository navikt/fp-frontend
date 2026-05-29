import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type UttakAp = AksjonspunktTilBekreftelse<
  | AksjonspunktKode.FASTSETT_UTTAKPERIODER
  | AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
  | AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT
  | AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
  | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD
  | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
>;
