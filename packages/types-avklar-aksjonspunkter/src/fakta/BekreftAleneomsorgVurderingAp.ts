import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftAleneomsorgVurderingAp = {
  aleneomsorg: boolean;
  annenforelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG>;

export default BekreftAleneomsorgVurderingAp;
