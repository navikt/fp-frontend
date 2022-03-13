import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageFormkravBasic = {
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
  vedtakBehandlingUuid?: string;
};

type KlageFormkravAp = KlageFormkravBasic & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP>;

export type KlageFormkravKaAp = KlageFormkravBasic & {
  sendTilKabal?: boolean;
  klageHjemmel?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_KA>;

export default KlageFormkravAp;
