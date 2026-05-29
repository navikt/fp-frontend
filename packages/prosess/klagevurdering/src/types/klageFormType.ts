import type { KlageHjemmel, KlageMedholdÅrsak, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

export type KlageFormType = {
  begrunnelse?: string;
  fritekstTilBrev?: string;
  klageVurdering?: KlageVurderingType;
  klageVurderingOmgjør?: KlageVurderingOmgjørType;
  klageMedholdÅrsak?: KlageMedholdÅrsak;
  klageHjemmel?: KlageHjemmel;
};
