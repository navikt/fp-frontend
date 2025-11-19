import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { KlageHjemmel, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KlageVurderingResultatAp = {
  klageVurdering: KlageVurderingType;
  fritekstTilBrev?: string;
  klageMedholdÅrsak?: string;
  klageVurderingOmgjør?: KlageVurderingOmgjørType;
  klageHjemmel?: KlageHjemmel;
  vedtaksdatoPaklagdBehandling?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP>;
