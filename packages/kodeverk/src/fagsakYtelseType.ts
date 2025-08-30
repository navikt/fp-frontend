import type { foreldrepenger_behandlingslager_fagsak_FagsakYtelseType } from '@navikt/fp-types';

export enum FagsakYtelseTypeEnum {
  ENGANGSSTONAD = 'ES',
  FORELDREPENGER = 'FP',
  SVANGERSKAPSPENGER = 'SVP',
}

export type FagsakYtelseType = foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
