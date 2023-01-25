import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp = {
  erMorForSykVedFodsel: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT>

export default VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp;
