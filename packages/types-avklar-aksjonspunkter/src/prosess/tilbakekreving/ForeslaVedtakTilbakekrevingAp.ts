import AksjonspunktCodeTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';

import AksjonspunktTilBekreftelse from '../../AksjonspunktTilBekreftelse';

type ForeslaVedtakTilbakekrevingAp = {
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCodeTilbakekreving.FORESLA_VEDTAK>;

export default ForeslaVedtakTilbakekrevingAp;
