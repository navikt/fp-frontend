import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderSoknadsfristAp = {
  ansesMottattDato?: string;
  harGyldigGrunn?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER>;

export default VurderSoknadsfristAp;
