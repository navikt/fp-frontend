import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

type KlageFormkravBasic = {
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  erTilbakekreving?: boolean;
  tilbakekrevingInfo?: {
    tilbakekrevingUuid?: string;
    tilbakekrevingVedtakDato?: string;
    tilbakekrevingBehandlingType?: string;
  };
  vedtakBehandlingUuid?: string;
  fritekstTilBrev?: string;
  mottattDato?: string;
};

export type KlageFormkravAp = KlageFormkravBasic & AksjonspunktTilBekreftelse<'5082'>;
