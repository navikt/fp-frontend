import type { foreldrepenger_behandlingslager_behandling_BehandlingStatus } from '@navikt/fp-types';

export enum BehandlingStatusEnum {
  OPPRETTET = 'OPPRE',
  BEHANDLING_UTREDES = 'UTRED',
  AVSLUTTET = 'AVSLU',
  IVERKSETTER_VEDTAK = 'IVED',
  FATTER_VEDTAK = 'FVED',
}

export type BehandlingStatus = foreldrepenger_behandlingslager_behandling_BehandlingStatus;
