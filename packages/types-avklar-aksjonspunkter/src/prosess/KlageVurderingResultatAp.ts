import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { KlageHjemmel, KlageMedholdÅrsak, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KlageVurderingResultatAp = {
  klageVurdering: KlageVurderingType;
  fritekstTilBrev?: string;
  klageMedholdÅrsak?: KlageMedholdÅrsak;
  klageVurderingOmgjør?: KlageVurderingOmgjørType;
  klageHjemmel?: KlageHjemmel;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP>;
