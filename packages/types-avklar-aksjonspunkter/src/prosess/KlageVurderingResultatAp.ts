import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { KlageHjemmel, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KlageVurderingResultatAp = {
  klageVurdering: KlageVurderingType;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: KlageVurderingOmgjørType;
  klageHjemmel?: KlageHjemmel;
  vedtaksdatoPaklagdBehandling?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.BEHANDLE_KLAGE_NFP>;
