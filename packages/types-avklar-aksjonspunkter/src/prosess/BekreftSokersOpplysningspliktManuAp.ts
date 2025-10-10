import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftSokersOpplysningspliktManuAp = {
  erVilkarOk: boolean;
  inntektsmeldingerSomIkkeKommer: {
    organisasjonsnummer?: string;
    aktørId?: string;
    brukerHarSagtAtIkkeKommer: boolean;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_MANU>;
