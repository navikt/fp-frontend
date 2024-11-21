import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageVurderingResultatAp = {
  klageVurdering: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  vedtaksdatoPaklagdBehandling?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.BEHANDLE_KLAGE_NFP>;

export default KlageVurderingResultatAp;
