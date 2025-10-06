import type { KlageHjemmel, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KlageVurderingResultatAp = {
  klageVurdering: KlageVurderingType;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: KlageVurderingOmgjørType;
  klageHjemmel?: KlageHjemmel;
  vedtaksdatoPaklagdBehandling?: string;
} & AksjonspunktTilBekreftelse<'5035'>;
