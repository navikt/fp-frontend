import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderTilbaketrekkAp = {
  hindreTilbaketrekk?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_TILBAKETREKK>;

export default VurderTilbaketrekkAp;
