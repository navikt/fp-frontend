import type { ProsessStegBegrunnelseTextFieldFormValues } from '@navikt/fp-prosess-felles';
import type { KlageHjemmel, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

export type KlageFormType = {
  fritekstTilBrev?: string;
  klageVurdering?: KlageVurderingType;
  klageVurderingOmgjør?: KlageVurderingOmgjørType;
  klageMedholdÅrsak?: string;
  klageHjemmel?: KlageHjemmel;
} & ProsessStegBegrunnelseTextFieldFormValues;
