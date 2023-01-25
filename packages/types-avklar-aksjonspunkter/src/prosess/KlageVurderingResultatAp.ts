import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageVurderingResultatAp = {
  klageVurdering: string;
  fritekstTilBrev?: string;
  klageAvvistArsak?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  vedtaksdatoPaklagdBehandling?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.BEHANDLE_KLAGE_NFP>;

export default KlageVurderingResultatAp;
