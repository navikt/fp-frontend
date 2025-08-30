import type { foreldrepenger_behandlingslager_fagsak_FagsakStatus } from '@navikt/fp-types';

export enum FagsakStatusEnum {
  OPPRETTET = 'OPPR',
  UNDER_BEHANDLING = 'UBEH',
  LOPENDE = 'LOP',
  AVSLUTTET = 'AVSLU',
}

export type FagsakStatus = foreldrepenger_behandlingslager_fagsak_FagsakStatus;
