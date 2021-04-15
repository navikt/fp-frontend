import AksjonspunktCodeTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../../AksjonspunktTilBekreftelse';

type VurderForeldelseAp = {
  foreldelsePerioder: {
    fraDato: string;
    tilDato: string;
    foreldelseVurderingType: Kodeverk | string;
    begrunnelse: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCodeTilbakekreving.VURDER_FORELDELSE>;

export default VurderForeldelseAp;
