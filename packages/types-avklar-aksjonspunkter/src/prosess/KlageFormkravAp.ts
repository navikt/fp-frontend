import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageFormkravAp = {
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  erTilbakekreving?: boolean;
  tilbakekrevingInfo: {
    tilbakekrevingUuid?: string;
    tilbakekrevingVedtakDato?: string;
    tilbakekrevingBehandlingType?: string;
  };
  vedtak?: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP | AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_KA>;

export default KlageFormkravAp;
