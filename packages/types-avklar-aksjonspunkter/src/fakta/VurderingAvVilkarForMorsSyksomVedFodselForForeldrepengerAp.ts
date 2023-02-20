import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp = {
  erMorForSykVedFodsel: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT>

export default VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp;
