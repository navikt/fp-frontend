import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftSokersOpplysningspliktManuAp = {
  erVilkarOk: boolean;
  inntektsmeldingerSomIkkeKommer: {
    organisasjonsnummer?: string;
    aktørId?: string;
    brukerHarSagtAtIkkeKommer: boolean;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU>;

export default BekreftSokersOpplysningspliktManuAp;
