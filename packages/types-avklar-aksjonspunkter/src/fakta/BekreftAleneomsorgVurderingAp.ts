import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftAleneomsorgVurderingAp = {
  aleneomsorg: boolean;
  annenforelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG>;

export default BekreftAleneomsorgVurderingAp;
