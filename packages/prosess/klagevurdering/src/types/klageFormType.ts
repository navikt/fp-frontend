import type { KlageHjemmel, KlageVurderingOmgjørType, KlageVurderingType } from '@navikt/fp-types';

export type KlageFormType = {
  begrunnelse?: string;
  fritekstTilBrev?: string;
  klageVurdering?: KlageVurderingType;
  klageVurderingOmgjoer?: KlageVurderingOmgjørType;
  klageMedholdArsak?: string;
  klageHjemmel?: KlageHjemmel;
};
