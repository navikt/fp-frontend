import type { foreldrepenger_behandlingslager_behandling_BehandlingType } from '@navikt/fp-types';

export enum BehandlingTypeEnum {
  FORSTEGANGSSOKNAD = 'BT-002',
  KLAGE = 'BT-003',
  REVURDERING = 'BT-004',
  DOKUMENTINNSYN = 'BT-006',
  TILBAKEKREVING = 'BT-007',
  ANKE = 'BT-008',
  TILBAKEKREVING_REVURDERING = 'BT-009',
}

export type BehandlingType = foreldrepenger_behandlingslager_behandling_BehandlingType;
