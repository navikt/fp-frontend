import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderTilbaketrekkAp = {
  hindreTilbaketrekk?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_TILBAKETREKK>;

export default VurderTilbaketrekkAp;
