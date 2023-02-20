import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderSoknadsfristAp = {
  ansesMottattDato?: string;
  harGyldigGrunn?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER>;

export default VurderSoknadsfristAp;
