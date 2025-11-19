import type { KlageHjemmel, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

export type KlageFormType = {
  begrunnelse?: string;
  fritekstTilBrev?: string;
  klageVurdering?: KlageVurderingType;
  klageVurderingOmgjør?: KlageVurderingOmgjørType;
  klageMedholdÅrsak?: string;
  klageHjemmel?: KlageHjemmel;
};
