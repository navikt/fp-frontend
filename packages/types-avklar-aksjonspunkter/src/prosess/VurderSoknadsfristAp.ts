import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderSoknadsfristAp = {
  ansesMottattDato?: string;
  harGyldigGrunn?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST>;
